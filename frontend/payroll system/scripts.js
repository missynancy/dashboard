function addPayroll() {
    const employeeId = document.getElementById('employeeId').value;
    const employeeName = document.getElementById('employeeName').value;
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    const deductions = parseFloat(document.getElementById('deductions').value);

    if (employeeId === '' || employeeName === '' || isNaN(hoursWorked) || isNaN(hourlyRate) || isNaN(deductions) || hoursWorked <= 0 || hourlyRate <= 0 || deductions < 0) {
        alert('Please enter valid payroll details.');
        return;
    }

    const totalPay = hoursWorked * hourlyRate;
    const netPay = totalPay - deductions;

    const table = document.getElementById('payrollTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const idCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);
    const hoursCell = newRow.insertCell(2);
    const rateCell = newRow.insertCell(3);
    const totalPayCell = newRow.insertCell(4);
    const deductionsCell = newRow.insertCell(5);
    const netPayCell = newRow.insertCell(6);
    const payslipCell = newRow.insertCell(7);

    idCell.textContent = employeeId;
    nameCell.textContent = employeeName;
    hoursCell.textContent = hoursWorked.toFixed(2);
    rateCell.textContent = `$${hourlyRate.toFixed(2)}`;
    totalPayCell.textContent = `$${totalPay.toFixed(2)}`;
    deductionsCell.textContent = `$${deductions.toFixed(2)}`;
    netPayCell.textContent = `$${netPay.toFixed(2)}`;

    const payslipButton = document.createElement('button');
    payslipButton.textContent = 'Generate Payslip';
    payslipButton.onclick = () => generatePayslip(employeeId, employeeName, hoursWorked, hourlyRate, totalPay, deductions, netPay, payslipButton);
    payslipCell.appendChild(payslipButton);

    // Clear input fields after adding the payroll entry
    document.getElementById('employeeId').value = '';
    document.getElementById('employeeName').value = '';
    document.getElementById('hoursWorked').value = '';
    document.getElementById('hourlyRate').value = '';
    document.getElementById('deductions').value = '';
}

function generatePayslip(employeeId, employeeName, hoursWorked, hourlyRate, totalPay, deductions, netPay, button) {
    const payslipWindow = window.open('', 'Payslip', 'width=600,height=400');
    payslipWindow.document.write(`
        <html>
        <head>
            <title>Payslip</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { text-align: center; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
                th { background-color: #f4f4f4; }
                button { padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px; }
                button.print { background-color: #007bff; color: white; }
                button.share { background-color: #28a745; color: white; }
            </style>
        </head>
        <body>
            <h1>Payslip</h1>
            <table>
                <tr><th>Employee ID</th><td>${employeeId}</td></tr>
                <tr><th>Employee Name</th><td>${employeeName}</td></tr>
                <tr><th>Hours Worked</th><td>${hoursWorked.toFixed(2)}</td></tr>
                <tr><th>Hourly Rate ($)</th><td>$${hourlyRate.toFixed(2)}</td></tr>
                <tr><th>Total Pay ($)</th><td>$${totalPay.toFixed(2)}</td></tr>
                <tr><th>Deductions ($)</th><td>$${deductions.toFixed(2)}</td></tr>
                <tr><th>Net Pay ($)</th><td>$${netPay.toFixed(2)}</td></tr>
            </table>
            <button class="print" onclick="window.print()">Print</button>
            <button class="share" onclick="sharePayslip()">Share</button>
            <script>
                function sharePayslip() {
                    const payslipDetails = {
                        title: 'Payslip for ${employeeName}',
                        text: 'Payslip Details:\\nEmployee ID: ${employeeId}\\nEmployee Name: ${employeeName}\\nHours Worked: ${hoursWorked.toFixed(2)}\\nHourly Rate: $${hourlyRate.toFixed(2)}\\nTotal Pay: $${totalPay.toFixed(2)}\\nDeductions: $${deductions.toFixed(2)}\\nNet Pay: $${netPay.toFixed(2)}',
                    };
                    if (navigator.share) {
                        navigator.share(payslipDetails)
                            .then(() => console.log('Payslip shared successfully'))
                            .catch(error => console.error('Error sharing payslip', error));
                    } else {
                        alert('Web Share API is not supported in your browser.');
                    }
                }
            </script>
        </body>
        </html>
    `);
    payslipWindow.document.close();

    // Change button text and color after generating the payslip
    button.textContent = 'Generated';
    button.classList.add('generated');
    button.onclick = null;
}
