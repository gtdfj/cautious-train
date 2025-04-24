document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function () {
        const fileName = '成绩排名.xlsx';
        const link = document.createElement('a');
        link.href = fileName;
        link.download = fileName;
        link.click();
    });
});    