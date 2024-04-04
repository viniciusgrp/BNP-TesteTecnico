/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import { useEffect, useState } from "react";
import styles from "@/styles/lista.module.css";
import { ICity } from "@/types/city.d";

export default function Lista({ cities }: { cities: ICity[] }) {
  const [list, setList] = useState<Array<ICity>>(cities);

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch("/api/cities/10");
      const data = await response.json();

      if (!response.ok) throw new Error("Erro ao obter os dados");

      setList(data);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Lista de cidades</h2>

        <div data-list-container>
          {list.map((city) => (
            <div data-list-item key={city.id}>
              {city.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:8080/api/cities/10");
  const cities = await response.json();

  return {
    props: {
      cities,
    },
    revalidate: 60,
  };
}
