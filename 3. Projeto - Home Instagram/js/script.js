if (Notification.permission !== "granted") {

    Notification.requestPermission().then(function(permission) {

        if (permission === "granted") {
            // Permissão concedida, você pode enviar notificações
        }
    });
}

setTimeout(() => {
    
    if (Notification.permission === "granted") {

        var options = {

            body: "Seja bem vindo ao meu projeto, visite meu GitHub",

            icon: "caminho-para-o-ícone-da-notificação.png"

            // Outras opções como title, image, etc., se necessário

        };

        var notification = new Notification("Miquéias Brandão Dev Diz:", options);

    } else {

        alert("Conceda ao site permissão de notificação para melhor experiencia!")

    }

}, 2000)

setTimeout(() => {
    
    if (Notification.permission === "granted") {

        var options = {

            body: "Seja bem vindo ao meu projeto, visite meu GitHub",

            icon: "caminho-para-o-ícone-da-notificação.png"

            // Outras opções como title, image, etc., se necessário

        };

        var notification = new Notification("Miquéias Brandão Dev Diz:", options);

    } else {

        alert("Conceda ao site permissão de notificação para melhor experiencia!")

    }

}, 15000)