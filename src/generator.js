class Generator {
    manangerGenerator = (user) => {
        return `    <div class="col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h2>${user.name}</h2>
                            <h3><i class="fas fa-mug-hot"></i> Manager</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${user.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${user.email}">${user.email}</a></li>
                                <li class="list-group-item">Office Number: ${user.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
    }

    engineerGenerator = (user) => {
        return `    <div class="col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h2>${user.name}</h2>
                            <h3><i class="fas fa-glasses"></i> Engineer</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${user.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${user.email}">${user.email}</a></li>
                                <li class="list-group-item">Github: ${user.github}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
    }
    
    internGenerator = (user) => {
        return `    <div class="col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h2>${user.name}</h2>
                            <h3><i class="fas fa-user-graduate"></i> Intern</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${user.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${user.email}">${user.email}</a></li>
                                <li class="list-group-item">School: ${user.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
    }
}

module.exports = Generator;