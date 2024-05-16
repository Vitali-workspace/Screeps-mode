function repairUnits(creep) {
    // Проверка наличия цели для ремонта
    if (creep.memory.repairTargetId) {
        const target = Game.getObjectById(creep.memory.repairTargetId);

        // Если цель не найдена, очищаем память
        if (!target) {
            delete creep.memory.repairTargetId;
            return;
        }

      
    }
}
