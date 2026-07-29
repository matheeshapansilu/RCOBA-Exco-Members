'use client';

import React, { useMemo } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
} from 'recharts';
import { Member } from '../data/members';

const COLORS = ['#800000', '#0047AB', '#009000', '#F28C28', '#8A2BE2', '#DC143C', '#20B2AA'];

export default function DashboardCharts({ members }: { members: Member[] }) {
  // 1. Calculate Members by Year
  const membersByYear = useMemo(() => {
    const yearCounts: Record<number, number> = {};
    members.forEach(m => {
      // Get unique years for this member to avoid double counting them in the same year
      const uniqueYears = new Set(m.positions.map(p => p.year));
      uniqueYears.forEach(year => {
        yearCounts[year] = (yearCounts[year] || 0) + 1;
      });
    });

    return Object.entries(yearCounts)
      .map(([year, count]) => ({ year, count }))
      .sort((a, b) => parseInt(a.year) - parseInt(b.year)); // Sort oldest to newest
  }, [members]);

  // 2. Calculate Role Distribution
  const roleDistribution = useMemo(() => {
    let secretaries = 0;
    let vicePresidents = 0;
    let patrons = 0;
    let treasurers = 0;
    let principals = 0;
    let other = 0;

    members.forEach(m => {
      const hasRole = (condition: (title: string) => boolean) => 
        m.positions.some(p => condition(p.title.toLowerCase()));

      let categorized = false;

      if (m.occupation && m.occupation.toLowerCase().includes('principal')) {
        principals++;
        categorized = true;
      }
      if (hasRole(t => t.includes('secretary'))) {
        secretaries++;
        categorized = true;
      }
      if (hasRole(t => t.includes('vice president'))) {
        vicePresidents++;
        categorized = true;
      }
      if (hasRole(t => t.includes('patron'))) {
        patrons++;
        categorized = true;
      }
      if (hasRole(t => t.includes('treasur'))) {
        treasurers++;
        categorized = true;
      }
      
      if (!categorized && m.positions.length > 0) {
        other++;
      }
    });

    // Filter out zeros
    return [
      { name: 'Principals', value: principals },
      { name: 'Secretaries', value: secretaries },
      { name: 'Vice Presidents', value: vicePresidents },
      { name: 'Patrons', value: patrons },
      { name: 'Treasurers', value: treasurers },
      { name: 'Committee Members', value: other },
    ].filter(role => role.value > 0);
  }, [members]);

  return (
    <div className="analytics-container animate-fade-in">
      
      <div className="chart-card glass">
        <h3 className="chart-title">Committee Size Over Time</h3>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={membersByYear} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey="year" stroke="var(--color-text-light)" />
              <YAxis stroke="var(--color-text-light)" />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                labelStyle={{ fontWeight: 'bold', color: 'var(--color-maroon)' }}
              />
              <Line 
                type="monotone" 
                dataKey="count" 
                name="Members"
                stroke="var(--color-maroon)" 
                strokeWidth={3}
                dot={{ r: 4, fill: 'var(--color-lightblue)', strokeWidth: 2 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-card glass">
        <h3 className="chart-title">Role Distribution</h3>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={roleDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {roleDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                itemStyle={{ fontWeight: '600' }}
              />
              <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '0.85rem' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
