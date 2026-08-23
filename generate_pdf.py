import csv
import os

csv_path = 'public/members.csv'
out_path = '../print_members.html'

html = '''
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>RCOBA Members Directory</title>
    <style>
        body { font-family: Arial, sans-serif; font-size: 11px; margin: 20px; }
        h1 { text-align: center; color: #6c152b; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 6px; text-align: left; }
        th { background-color: #6c152b; color: white; -webkit-print-color-adjust: exact; }
        tr:nth-child(even) { background-color: #f2f2f2; -webkit-print-color-adjust: exact; }
        @media print {
            body { margin: 0; }
            button { display: none; }
            table { page-break-inside: auto; }
            tr { page-break-inside: avoid; page-break-after: auto; }
        }
    </style>
</head>
<body>
    <h1>RCOBA Exco Members Directory</h1>
    <button onclick="window.print()" style="padding: 10px 20px; margin-bottom: 20px; background-color: #6c152b; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 14px;">Print to PDF</button>
    <table>
        <thead>
            <tr>
                <th>Membership No.</th>
                <th>Full Name</th>
                <th>Occupation</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
'''

with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        html += f'''
            <tr>
                <td>{row['MembershipNumber']}</td>
                <td>{row['FullName']}</td>
                <td>{row['Occupation']}</td>
                <td>{row['Email']}</td>
                <td>{row['PhoneNumber']}</td>
            </tr>
        '''

html += '''
        </tbody>
    </table>
    <script>
        window.onload = function() { window.print(); }
    </script>
</body>
</html>
'''

with open(out_path, 'w', encoding='utf-8') as f:
    f.write(html)
