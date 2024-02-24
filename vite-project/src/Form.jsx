import './Estilo.css'
function Form() {
    function MeuEvento(e) {
        e.preventDefault()
        var a = document.getElementById('txt').value
        document.write(` opa submeteu de boas ${a}`)

    }
    return (
        <div>
            <form onSubmit={MeuEvento}>
                <div>
                    <input type="text" placeholder="digite aqui seu nome" id="txt" />

                </div>
                <div>
                    <input type="submit" value="submeter" />
                </div>
            </form>
        </div>
    )
}
export default Form;

