document.getElementById('fetchButton').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'fetch_customer_name.php', true);
    xhr.onload = function() {
        if (this.status == 200) {
            document.getElementById('customerName').innerHTML = this.responseText;
        } else {
            document.getElementById('customerName').innerHTML = 'Error fetching data';
        }
    };
    xhr.send();
});