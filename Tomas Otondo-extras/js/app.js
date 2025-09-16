document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('facturaForm');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const monto = document.getElementById('monto').value;
        const metodo = document.getElementById('metodo').value;

        if (!nombre || !monto || !metodo) {
            mensaje.textContent = 'Por favor, completa todos los campos.';
            mensaje.style.color = '#e11d48';
            return;
        }

        mensaje.textContent = `Factura cobrada a ${nombre} por $${parseFloat(monto).toFixed(2)} (${metodo}).`;
        mensaje.style.color = '#2563eb';
        form.reset();
    });
});
