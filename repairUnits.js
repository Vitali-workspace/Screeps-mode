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
      
    }
}
