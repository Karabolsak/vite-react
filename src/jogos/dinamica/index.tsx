import './style.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Back from '../../../icones/navegar.svg';
import { supabase } from '../../clienteSupabase.tsx';


interface Jogo {
    id: number;
    nomeJogo: string;
    dono: string;
    lancado: string;
    pc: boolean;
    psn: boolean;
    xbox: boolean;
    multiplayer: boolean;
    genero: string;
    descricao: string;
    ios: boolean;
    android: boolean;
    imagemJogo: string;
}

    
export default function dinamicaJogos () {
    const navigate = useNavigate();
    const { id } = useParams();
    const [jogo, setJogo] = useState<Jogo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    const handleNavigation = (path: string) => {
        navigate(path);
    };

    useEffect(() => {
        async function fetchJogo() {
            try {
                const {data, error} = await supabase
                    .from("jogos")
                    .select("*")
                    .eq("id", id)
                    .single();

                    if (error) throw error;
                    setJogo(data);
            } catch (err) {
                setError("Erro ao buscar jogo");
            } finally {
                setLoading(false);
            }
        }

        fetchJogo();
    }, [id]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
    if (!jogo) return <p>Jogo não encontrado</p>;

    const plataformas:Record<string, boolean> = {
        "pc": jogo.pc,
        "psn": jogo.psn,
        "xbox": jogo.xbox,
        "ios": jogo.ios,
        "android": jogo.android,
    }

    const plataformasAtivas = Object.entries(plataformas)
        .filter(([_, value]) => value)
        .map(([key]) => key);


    return(
        <div className='conteudoDinamica'>
            <div className='BotaoRETORNO'>
                <img 
                    src={Back} 
                    alt="Voltar"
                    onClick={() => handleNavigation("/jogos")}
                    />
            </div>
            <div className='platDinamicos'>
                <div className='conteudoJOGOSdinamico'>    
                    <div>
                        <img src={jogo.imagemJogo} alt="Jogo" />
                    </div>
                    <div className='jogosINFORMACOES'>
                        <h1>{jogo.nomeJogo} </h1>
                        <p>{jogo.dono}</p>
                        <p>{jogo.lancado} </p>
                        <p>Plataformas: {plataformasAtivas.length > 0 ?plataformasAtivas.join(", "): "Nenhuma disponível"} </p>
                    </div>
                </div>
                <div className='descricaoDinamicos'>
                    <h2>Descrição</h2>
                    <h3>{jogo.descricao}</h3>
                </div>
            </div>
        </div>
    )
}