import mongoose from "mongoose";
import studentModel from "./models/studentModel.js";

const main = async () => {
    const uri = 'mongodb://127.0.0.1:27017/class-17';
    await mongoose.connect(uri);
    
    let result = await studentModel.insertMany(
        [
            {"first_name":"Juan","last_name":"Pérez","email":"juan.perez@example.com","gender":"M","grade":8,"group":"1A"},
            {"first_name":"María","last_name":"López","email":"maria.lopez@example.com","gender":"F","grade":9,"group":"1B"},
            {"first_name":"Pedro","last_name":"Martínez","email":"pedro.martinez@example.com","gender":"M","grade":7,"group":"1A"},
            {"first_name":"Ana","last_name":"García","email":"ana.garcia@example.com","gender":"F","grade":6,"group":"1B"},
            {"first_name":"José","last_name":"Rodríguez","email":"jose.rodriguez@example.com","gender":"M","grade":5,"group":"1A"},
            {"first_name":"Laura","last_name":"Sánchez","email":"laura.sanchez@example.com","gender":"F","grade":10,"group":"1B"},
            {"first_name":"Luis","last_name":"González","email":"luis.gonzalez@example.com","gender":"M","grade":4,"group":"1A"},
            {"first_name":"Isabel","last_name":"Ruiz","email":"isabel.ruiz@example.com","gender":"F","grade":9,"group":"1B"},
            {"first_name":"Antonio","last_name":"Torres","email":"antonio.torres@example.com","gender":"M","grade":8,"group":"1A"},
            {"first_name":"Julia","last_name":"Vega","email":"julia.vega@example.com","gender":"F","grade":7,"group":"1B"},
            {"first_name":"David","last_name":"Muñoz","email":"david.munoz@example.com","gender":"M","grade":6,"group":"1A"},
            {"first_name":"Carmen","last_name":"Navarro","email":"carmen.navarro@example.com","gender":"F","grade":5,"group":"1B"}
        ]
    );

    console.log(result);
}

main();