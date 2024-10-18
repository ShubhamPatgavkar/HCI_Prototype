// Sample Data for Reports and Alerts
document.addEventListener('DOMContentLoaded', () => {
    // Meal Quality Pie Chart
    const qualityCtx = document.getElementById('qualityChart').getContext('2d');
    new Chart(qualityCtx, {
        type: 'pie',
        data: {
            labels: ['Good', 'Average', 'Poor'],
            datasets: [{
                label: 'Meal Quality',
                data: [60, 30, 10],
                backgroundColor: ['#3aafa9', '#ffcc00', '#ff6b6b'],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    // Meal Quantity Bar Chart
    const quantityCtx = document.getElementById('quantityChart').getContext('2d');
    new Chart(quantityCtx, {
        type: 'bar',
        data: {
            labels: ['School A', 'School B', 'School C', 'School D', 'School E'],
            datasets: [{
                label: 'Meals Delivered',
                data: [300, 450, 500, 280, 320],
                backgroundColor: '#2b7a78'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Performance Line Chart
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    new Chart(performanceCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [{
                label: 'Performance Score',
                data: [80, 85, 90, 88, 92, 85, 95, 98, 90, 97],
                backgroundColor: 'rgba(42, 122, 120, 0.2)',
                borderColor: '#2b7a78',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    // Dynamic Alerts Section
    const alertList = document.getElementById('alertList');
    const issues = [
        "Delayed delivery for 3 schools.",
        "Poor quality reported by 2 schools.",
        "Request for extra meals by 5 schools."
    ];

    issues.forEach(issue => {
        const li = document.createElement('li');
        li.textContent = issue;
        alertList.appendChild(li);
    });
});


function toggleNavbar() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
