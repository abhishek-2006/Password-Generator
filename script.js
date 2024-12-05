document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const complexity = document.getElementById("complexity").value;

    let characters = "";
    switch (complexity) {
        case "1": // Numbers Only
            characters = "0123456789";
            break;
        case "2": // Letters Only
            characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        case "3": // Letters and Numbers
            characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            break;
        case "4": // High Complexity
            characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&-_";
            break;
        default:
            characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("password").value = password || "Invalid Settings";
}
