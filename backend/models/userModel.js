const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const saltRounds=10;
const Schema = mongoose.Schema;
const userSchema= new Schema( {

    nom:{
        type:String,
        trim:true,
        required:true
        
    },
   
    Prenom:{
        type:String,
        required:true
    },
    
    email: {

        type: String,

        required: [true, 'Email is required'],

        unique:true,

        // sync validation

        validate: {

            validator: function (v) {

               

         return(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v));

            },

            // message to return if validation fails

            message: props => `${

                props.value

            } is not a valid code format!`

        },

        required: [true, 'email required']

    },
    adresse:{
        type:String,
        required:true
    },
 
    password:{
        type:String,
        validate:{
            validator:function(v){
                return(/^[A-Za-z]\w{7,14}$/.test(v));
            },
            message: props => `${
                props.value
            }password invalidate`
        },
        required:true
    },
    phone:{
        type:Number,
        validate:{
            validator:function(v){
                return(/\d{2}\d{3}\d{3}/.test(v));
            },
            message: props => `${
                props.value
            }is not a valide code format`
            
        },
        required:true
    }
}
);
userSchema.pre('save',function(next){
    this.password=bcrypt.hashSync(this.password,saltRounds);
    next();
});
module.exports = mongoose.model('user',userSchema);