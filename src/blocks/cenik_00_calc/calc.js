function sla_calculate(){
    const electricity_price = 6;
    const map_sla_resin = new Map();
        map_sla_resin.set('Clear', 4.61);
        map_sla_resin.set('Black', 4.61);
        map_sla_resin.set('White', 4.61);
        map_sla_resin.set('Gray', 4.61);
        map_sla_resin.set('Tough', 5.68);
        map_sla_resin.set('Durable', 5.68);
        map_sla_resin.set('High Temp', 5.68);
        map_sla_resin.set('Grey Pro', 5.68);
        map_sla_resin.set('ESD', 5.68);
        map_sla_resin.set('Rigid', 6.40);
        map_sla_resin.set('Elastic', 6.40);
        map_sla_resin.set('Flexible', 6.40);
        map_sla_resin.set('BioMed', 7.99);
        map_sla_resin.set('Castable', 8.10);
    const power_consumption = 0.0060;
    const hourly_rate = 40;
    const handling_fee = 100;
    const resin = document.getElementById("sla_resin");
    const volume = document.getElementById("sla_volume");
    const time = document.getElementById("sla_time");
    const output = document.getElementById("sla_price");
    let time_values = time.value.split(':');
    let time_hours = parseInt(time_values[0], 10) + parseInt(time_values[1], 10)/60
    output.textContent = Math.round(map_sla_resin.get(resin.value)*volume.value + time_hours*hourly_rate+handling_fee + time_hours*power_consumption*electricity_price) + " Kč";
}

function fdm_calculate(){
    const handling_fee = 50;
    const weight = document.getElementById("fdm_weight");
    const weight_price = 6;
    const hourly_rate = 30;
    const time = document.getElementById("fdm_time");
    const output = document.getElementById("fdm_price");
    let time_values = time.value.split(':');
    let time_hours = parseInt(time_values[0], 10) + parseInt(time_values[1], 10)/60 
    output.textContent = Math.round(time_hours*hourly_rate + weight_price*weight.value+handling_fee) + " Kč"
}

function laser_calculate(){
    const handling_fee = 50;
    const material = document.getElementById("laser_material");
    const hourly_rate = 360;
    const time = document.getElementById("laser_time");
    const output = document.getElementById("laser_price");
    let time_values = time.value.split(':');
    let time_hours = parseInt(time_values[0], 10) + parseInt(time_values[1], 10)/60 
    output.textContent = Math.round(time_hours*hourly_rate + parseInt(material.value,10) + handling_fee) + " Kč"
}