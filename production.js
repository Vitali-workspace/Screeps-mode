module.exports.loop = function () {
    // Получить список всех ваших юнитов
    const creeps = Game.creeps;

    // Пройтись по каждому юниту
    for (const name in creeps) {
        const creep = creeps[name];

        // Если юнит - сборщик ресурсов
        if (creep.memory.role === 'harvester') {
            // Если у юнита нет цели
            if (!creep.memory.target) {
                // Найти ближайший источник ресурсов
                const source = creep.pos.findClosestByPath(FIND_SOURCES);

                // Сохранить источник ресурсов в памяти юнита
                creep.memory.target = source.id;
            }

            // Двигаться к источнику ресурсов
            creep.moveTo(Game.getObjectById(creep.memory.target));

            // Если юнит находится рядом с источником ресурсов
            if (creep.pos.isNearTo(Game.getObjectById(creep.memory.target))) {
                // Собирать ресурсы
                creep.harvest(Game.getObjectById(creep.memory.target));
            }
        }
    }
};
