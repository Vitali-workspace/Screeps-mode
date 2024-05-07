module.exports.loop = function () {
    // Получить список всех юнитов
    const creeps = Game.creeps;

    // Проверить, есть ли юниты каждого типа
    const roles = ['harvester', 'upgrader', 'builder', 'repairer'];
    let hasAllRoles = true;
    for (const role of roles) {
        if (!creeps.some(creep => creep.memory.role === role)) {
            hasAllRoles = false;
            break;
        }
    }

    
    // Если нет юнитов каждого типа, создать их
    if (!hasAllRoles) {
        const spawn = Game.spawns['Spawn1'];
        if (spawn.energy >= 300) {
            const role = roles[Math.floor(Math.random() * roles.length)];
            spawn.createCreep([WORK, CARRY, MOVE], `${role}-${Game.time}`, { role });
        }
    }

    // Пройтись по каждому юниту
    for (const name in creeps) {
        const creep = creeps[name];

        // Если юнит - рабочий
        if (creep.memory.role === 'worker') {
            // Выполнить действия рабочего
            creep.work();
        }
    }
};
