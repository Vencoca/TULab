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
    const hours = document.getElementById("sla_h");
    const minutes = document.getElementById("sla_m");
    const resin = document.getElementById("sla_resin");
    const volume = document.getElementById("sla_volume");
    const output = document.getElementById("sla_price");
    let time_hours = parseInt(hours.value, 10) + parseInt(minutes.value, 10)/60 
    output.textContent = Math.round(map_sla_resin.get(resin.value)*volume.value + time_hours*hourly_rate+handling_fee + time_hours*power_consumption*electricity_price) + " Kč";
}

function fdm_calculate(){
    const map_fdm_fillament = new Map();
    map_fdm_fillament.set('ASA_spectrum', 0.700);
    map_fdm_fillament.set('PETG_generic', 0.600);
    map_fdm_fillament.set('PETG_pm', 0.660);
    map_fdm_fillament.set('PETG_prusa', 0.600);
    map_fdm_fillament.set('PETG_spectrum', 0.450);
    map_fdm_fillament.set('PLA_ekoMB', 0.450);
    map_fdm_fillament.set('PLA_extrafill', 0.600);
    map_fdm_fillament.set('PLA_generic', 0.600);
    map_fdm_fillament.set('PLA_pm', 0.660);
    map_fdm_fillament.set('PLA_prusa', 0.600);
    map_fdm_fillament.set('PLA+PM', 0.600);
    const handling_fee = 30;
    const weight = document.getElementById("fdm_weight");
    const hourly_rate = 30;
    const fillament = document.getElementById("fdm_fillament");
    const hours = document.getElementById("fdm_h");
    const minutes = document.getElementById("fdm_m");
    const output = document.getElementById("fdm_price");
    let time_hours = parseInt(hours.value, 10) + parseInt(minutes.value, 10)/60 
    output.textContent = Math.round(time_hours*hourly_rate + map_fdm_fillament.get(fillament.value)*weight.value+handling_fee) + " Kč"
}

function laser_calculate(){
    const handling_fee = 50;
    const material = document.getElementById("laser_material");
    const hourly_rate = 360;
    const hours = document.getElementById("laser_h");
    const minutes = document.getElementById("laser_m");
    const output = document.getElementById("laser_price");
    let time_hours = parseInt(hours.value, 10) + parseInt(minutes.value, 10)/60 
    output.textContent = Math.round(time_hours*hourly_rate + parseInt(material.value,10) + handling_fee) + " Kč"
}