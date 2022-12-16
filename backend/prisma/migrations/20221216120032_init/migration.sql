-- CreateTable
CREATE TABLE `pertanyaan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pertanyaan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jawaban` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jawaban` VARCHAR(191) NOT NULL,
    `betulkah` BOOLEAN NOT NULL,
    `pertanyaanId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `jawaban` ADD CONSTRAINT `jawaban_pertanyaanId_fkey` FOREIGN KEY (`pertanyaanId`) REFERENCES `pertanyaan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
