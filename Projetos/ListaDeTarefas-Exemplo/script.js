
        // JavaScript básico para funcionalidade
        document.getElementById('adicionar-btn').addEventListener('click', function() {
            const input = document.getElementById('tarefa-input');
            const texto = input.value.trim();
            
            if (texto) {
                const lista = document.getElementById('lista-tarefas');
                const novaLi = document.createElement('li');
                novaLi.className = 'tarefa-item';
                
                novaLi.innerHTML = `
                    <span class="tarefa-texto">${texto}</span>
                    <div class="acoes">
                        <button class="concluir-btn">✓</button>
                        <button class="deletar-btn">🗑️</button>
                    </div>
                `;
                
                lista.appendChild(novaLi);
                input.value = '';
            }
        });

        // Delegar eventos para botões de concluir e deletar
        document.getElementById('lista-tarefas').addEventListener('click', function(e) {
            if (e.target.classList.contains('deletar-btn')) {
                e.target.closest('li').remove();
            } else if (e.target.classList.contains('concluir-btn')) {
                const tarefa = e.target.closest('li').querySelector('.tarefa-texto');
                tarefa.classList.toggle('concluida');
            }
        });
