  function contarVocales() {
      var texto = document.getElementById("texto").value.toLowerCase();
      var vocales = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
      };

      for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        if (vocales.hasOwnProperty(letra)) {
          vocales[letra]++;
        }
      }

      var tablaHTML = '<table class="table"><thead><tr><th>Vocal</th><th>Cantidad</th></tr></thead><tbody>';
      for (var vocal in vocales) {
        if (vocales.hasOwnProperty(vocal)) {
          tablaHTML += '<tr><td>' + vocal.toUpperCase() + '</td><td>' + vocales[vocal] + '</td></tr>';
        }
      }
      tablaHTML += '</tbody></table>';
      document.getElementById("contenedorTabla").innerHTML = tablaHTML;
    }