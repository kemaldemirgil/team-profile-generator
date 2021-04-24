const generator = () => {
    
}

return `
<div class="col-md-6 col-lg-4">
    <div class="card">
        <div class="card-header">
            <h2>{% name %}</h2>
            <h3><i class="fas fa-glasses"></i> Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: {% id %}</li>
                <li class="list-group-item">Email: <a href="mailto:{% email %}">{% email %}</a></li>
                <li class="list-group-item">Github: {% github %}</li>
            </ul>
        </div>
    </div>
</div>
`
