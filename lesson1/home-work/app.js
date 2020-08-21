// Task1 Задача перемістити студентів з 20 години на 18 та навпаки

const fs = require('fs');
const path = require('path');


function replaceFileInTwoFolder(firstFolderName = '1800', secondFolderName = '2000') {
    const filesOfFirstFolder = [];
    const filesOfSecondFolder = [];

    fs.readdir(path.join(process.cwd(), firstFolderName), (err, files) => {
        if (err) throw err;
        else filesOfFirstFolder.push(...files);
        // console.log(filesOfFirstFolder)
        for (let i = 0; i < filesOfFirstFolder.length; i++) {
            console.log(i);
            fs.rename(path.join(process.cwd(), firstFolderName, filesOfFirstFolder[i]), path.join(process.cwd(), secondFolderName, filesOfFirstFolder[i]), (err) => {
                if (err) throw err;
                console.log(`Replace ${filesOfFirstFolder[i]} compleated!`);
            });
        }
    });

    fs.readdir(path.join(process.cwd(), secondFolderName), (err, files) => {
        if (err) throw err;
        else filesOfSecondFolder.push(...files);
        // console.log(filesOfSecondFolder)
        for (let i = 0; i < filesOfSecondFolder.length; i++) {
            fs.rename(path.join(process.cwd(), secondFolderName, filesOfSecondFolder[i]), path.join(process.cwd(), firstFolderName, filesOfSecondFolder[i]), (err) => {
                if (err) throw err;
                console.log(`Replace ${filesOfSecondFolder[i]} compleated!`);
            });
        }
    });
}

replaceFileInTwoFolder();
