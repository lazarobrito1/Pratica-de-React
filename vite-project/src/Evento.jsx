import Button from "./Button";

export default function Evento () {
        function meuEvento () {
          console.log("clicou")
        }

    return (
        <div>
            <Button event={meuEvento} text="Clique"/>
        </div>
    )
}