function commentoValido() {
    if (document.commento.ilMessaggio.value.length > 255) {
        alert("Testo troppo lungo!");
        return false;
    }
    return true;
}

/*
<script type="text/javascript">
function ContaCaratteri()
{
    document.modulo.conta.value = .commento.ilMessaggio.value.length;
    var massimo = 500;
    if (document.modulo.testo.value.length > massimo)
    {
        document.modulo.testo.value = document.modulo.testo.value.substr(0, massimo);
        document.modulo.conta.value = massimo;
        alert("Massimo " + massimo + " caratteri!");
    }
}
</script>*/