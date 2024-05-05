module.exports.loop = function () {
    // Получить список всех юнитов
    const creeps = Game.creeps;

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
