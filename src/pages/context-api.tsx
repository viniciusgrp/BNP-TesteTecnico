/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from "@/styles/context-api.module.css";
import { ToastMessage } from "@/components/ToastMessage";
import { useToast } from "@/context/toastContext";

export default function ContextApi() {
  const { addToast, messages } = useToast();

  function handleSuccessButtonClick() {
    addToast({
      id: (messages.length + 1).toString(),
      message: "Mensagem de sucesso",
      type: "success",
    });
  }

  function handleErrorButtonClick() {
    addToast({
      id: (messages.length + 1).toString(),
      message: "Mensagem de erro",
      type: "error",
    });
  }

  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={handleSuccessButtonClick}>
          Disparar mensagem de sucesso
        </button>
        <button type="button" onClick={handleErrorButtonClick}>
          Disparar mensagem de erro
        </button>
      </div>

      <div className={styles["toast-container"]}>
        {messages.map((message) => (
          <ToastMessage key={message.id} content={message} />
        ))}
      </div>
    </>
  );
}
