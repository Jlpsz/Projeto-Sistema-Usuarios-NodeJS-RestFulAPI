class Utils {

    static dateFormate(date){

        let datestorage = new Date();  
        let yda = datestorage.toLocaleDateString();
        let hmsTime = datestorage.toLocaleTimeString();
        
        return date = yda + ' ' + hmsTime ;

    }



}