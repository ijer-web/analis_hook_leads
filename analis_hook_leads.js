function analis_hook_leads_inside(req_object_rasparse_1111){
	
		
	console.log("Здаецца мне, мы говорим о сделке");
	if("add" in req_object_rasparse.leads) { 
		console.log(" и Здаецца мне, гэта была новая сделка!");
		new_log += " новой сделке";

		// Определяем имя сделки
		if("name" in req_object_rasparse.leads.add[0]) { // 
		    console.log(" с названием: ");
			var lead_name=req_object_rasparse.leads.add[0].name;
		}
		else{
			var lead_name=" без названия";

		}
		// определяем id клиента 
		if("id" in req_object_rasparse.leads.add[0]) { // 
		    console.log(" с ID: ");
			var lead_contact_ID=req_object_rasparse.leads.add[0].id;
		}
		else{
			var lead_contact_ID=" без определенного ID";
		}
}


module.exports = analis_hook_leads_inside;