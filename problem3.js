class Person
{
    constructor(name, weight, height)
    {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    patientHistory()
    {
        console.log(this.weight / (this.height * this.height) * 703);
    }
}

var  patient1 = new Person("Cierra", 160, 69);

patient1.patientHistory();










