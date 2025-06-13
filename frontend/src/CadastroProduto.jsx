import { useState } from "react";
import axios from './service/api';

function CadastroProduto() {
  const [imagem, setImagem] = useState(null);
  const [imagemUrl, setImagemUrl] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imagem", imagem);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      setImagemUrl(response.data.imageUrl);
      alert("Imagem enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
      alert("Erro ao enviar imagem");
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImagem(e.target.files[0])}
      />
      <button type="submit">Enviar imagem</button>

      {imagemUrl && (
        <div>
          <p>Imagem enviada:</p>
          <img src={imagemUrl} alt="Imagem enviada" width={200} />
        </div>
      )}
    </form>
  );
}

export default CadastroProduto;
