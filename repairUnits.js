function repairUnits(creep) {
    // Проверка наличия цели для ремонта
    if (creep.memory.repairTargetId) {
        const target = Game.getObjectById(creep.memory.repairTargetId);

        // Если цель не найдена, очищаем память
        if (!target) {
            delete creep.memory.repairTargetId;
            return;
        }

        // Ремонт цели
        if (creep.repair(target) === ERR_NOT_IN_RANGE) {
            // Перемещение к цели, если она не в радиусе действия
            creep.moveTo(target);
        }
    } else {
        // Поиск юнитов, нуждающихся в ремонте
        const damagedUnits = creep.room.find(FIND_STRUCTURES, {
            filter: object => object.hits < object.hitsMax
        });

        // Сортировка юнитов по степени повреждения
        damagedUnits.sort((a, b) => a.hits - b.hits);

        // Выбор цели с наибольшим повреждением
        if (damagedUnits.length > 0) {
            creep.memory.repairTargetId = damagedUnits[0].id;
        }
    }
}
