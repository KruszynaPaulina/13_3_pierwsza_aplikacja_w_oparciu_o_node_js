process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {

    	var instruction = input.toString().trim();
        
    	/*
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stdout.write('Wrong instruction!\n');
        }
        */

        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/version':
                process.stdout.write('Node.js version: ' + process.versions.node + '\n');
                break;
            case '/lang':
                process.stdout.write("User's system language: " + process.env.LANG + '\n');
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }

    }
});