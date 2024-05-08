module.exports.loop = function () {
    // Получить список всех ваших юнитов
    const creeps = Game.creeps;

    // Пройтись по каждому юниту
    for (const name in creeps) {
        const creep = creeps[name];

        // Если юнит - строитель
        if (creep.memory.role === 'builder') {
            // Если у юнита нет цели
            if (!creep.memory.target) {
                // Найти ближайшую стройку
                const constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);

                // Сохранить стройку в памяти юнита
                creep.memory.target = constructionSite.id;
            }

            // Двигаться к стройке
            creep.moveTo(Game.getObjectById(creep.memory.target));

            // Если юнит находится рядом со стройкой
            if (creep.pos.isNearTo(Game.getObjectById(creep.memory.target))) {
                // Строить
                creep.build(Game.getObjectById(creep.memory.target));
            }
        }
    }
};
