class Veiculo {
    rodas = 4;

    mover(dircao){

    }

    virar(direcao) {

    }
}

    class Moto extends veiculo {
        constructor() {
            super() // puxar atributos e métodos do pai
            this.rodas = 2;
        }
    }
