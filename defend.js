module.exports.loop = function () {
    // Получить список всех ваших юнитов
    const creeps = Game.creeps;

    // Пройтись по каждому юниту
    for (const name in creeps) {
        const creep = creeps[name];

        // Если юнит - защитник базы
        if (creep.memory.role === 'defender') {
            // Найти ближайшего врага
            const enemy = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

            // Если враг найден
            if (enemy) {
                // Атаковать врага
                creep.attack(enemy);
            } else {
                // Если врагов нет, патрулировать базу
                const flag = Game.flags['Base'];
                if (flag) {
                    creep.moveTo(flag);
                }
            }
        }
    }
};
