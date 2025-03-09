import './style.css';
import { useState, useEffect } from "react";
import { supabase } from "../clienteSupabase";

interface StarRatingProps {
  average: number;       
}

const StarRating = ({ average }: StarRatingProps) => {
  // Função para determinar o emote de estrelas com base na média
  const getStarEmote = (avg: number) => {
    if (avg >= 4.5) return "🌟🌟🌟🌟🌟";  // 5 estrelas
    if (avg >= 3.5) return "🌟🌟🌟🌟";    // 4 estrelas
    if (avg >= 2.5) return "🌟🌟🌟";      // 3 estrelas
    if (avg >= 1.5) return "🌟🌟";        // 2 estrelas
    return "🌟";                          // 1 estrela
  };

  return (
    <div>
      {/* Exibe o emote de estrelas baseado na média */}
      <div className="text-xl mb-2">{getStarEmote(average)}</div>
    </div>
  );
};

interface GameRatingProps {
  gameId: number;
}

const GameRating = ({ gameId }: GameRatingProps) => {
  const [average, setAverage] = useState<number>(0);
  const [totalRatings, setTotalRatings] = useState<number>(0);

  // Função para buscar avaliações e calcular média
  const fetchRatings = async () => {
    const { data, error } = await supabase
      .from("ratings")
      .select("rating")
      .eq("game_id", gameId);
  
    if (error) {
      console.error("Erro ao buscar avaliações:", error);
      return;
    }
  
    console.log("Avaliações retornadas:", data); // Verifique as avaliações retornadas
  
    if (data && data.length > 0) {
      const total = data.length;
      const avg = data.reduce((sum, r) => sum + r.rating, 0) / total;
      console.log("Média calculada:", avg); // Verifique a média calculada
      setAverage(Math.round(avg)); // Média formatada com 1 casa decimal
      setTotalRatings(total);
    }
  };

  // Chama a função de busca de avaliações assim que o componente é carregado
  useEffect(() => {
    fetchRatings();
  }, [gameId]);

  return (
    <div className='avaliacaoRating'>
      <StarRating average={average} />
      <p>
        Média: <span>{average}</span> ({totalRatings})
      </p>
    </div>
  );
};

export default GameRating;
