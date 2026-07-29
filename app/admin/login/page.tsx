'use client';

import React, { useState } from 'react';
import { adminLogin } from '../actions';
import { Shield } from 'lucide-react';

export default function AdminLoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setError(null);
    const result = await adminLogin(formData);
    if (result?.error) {
      setError(result.error);
      setIsLoading(false);
    }
  }

  return (
    <div className="login-container">
      <div className="login-card glass animate-fade-in">
        <div className="login-header">
          <div className="lock-icon-wrapper">
            <Shield size={32} className="lock-icon" />
          </div>
          <h2>Admin Portal</h2>
          <p>Sign in with your administrator email and password.</p>
        </div>

        <form action={handleSubmit} className="login-form">
          <div className="input-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Admin Email" 
              required 
              className="passcode-input"
            />
          </div>
          <div className="input-group" style={{ marginTop: '16px' }}>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              required 
              className="passcode-input"
            />
          </div>
          
          {error && <p className="error-message">{error}</p>}
          
          <button type="submit" disabled={isLoading} className="submit-button">
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          padding: 20px;
        }

        .login-card {
          width: 100%;
          max-width: 400px;
          padding: 40px;
          border-radius: 24px;
          text-align: center;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .lock-icon-wrapper {
          width: 64px;
          height: 64px;
          background: #1e293b;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: white;
        }

        .login-header h2 {
          color: #1e293b;
          font-size: 24px;
          margin-bottom: 8px;
        }

        .login-header p {
          color: #64748b;
          margin-bottom: 30px;
          font-size: 15px;
          line-height: 1.5;
        }

        .passcode-input {
          width: 100%;
          padding: 16px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 16px;
          outline: none;
          transition: all 0.2s;
        }

        .passcode-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .error-message {
          color: #ef4444;
          font-size: 14px;
          margin: 12px 0 0;
        }

        .submit-button {
          width: 100%;
          padding: 16px;
          background: #1e293b;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 24px;
          transition: all 0.2s;
        }

        .submit-button:hover:not(:disabled) {
          background: #0f172a;
          transform: translateY(-2px);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
