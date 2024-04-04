/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from "react";
import Head from "next/head";

import styles from "@/styles/modal.module.css";
import { Modal } from "@/components/Modal";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  function handleModalClose() {
    setModalIsOpen(false);
  }

  function handleModalConfirm() {
    setModalIsOpen(false);
    alert("confirmado");
  }

  function contentModal() {
    return (
      <div className={styles.contentModal}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
          reiciendis quia iusto explicabo quae numquam nulla inventore sed
          laboriosam, eius aspernatur doloribus tempore distinctio autem.
          Debitis et laboriosam accusamus exercitationem?
        </p>
      </div>
    );
  }

  return (
    <>
      <main className={styles.container}>
        <button type="button" onClick={() => setModalIsOpen(true)}>
          Abrir modal de confirmação
        </button>
      </main>

      <Modal
        onConfirm={handleModalConfirm}
        onClose={handleModalClose}
        isOpen={modalIsOpen}
        title="Confirmação"
      >
        {contentModal()}
      </Modal>
    </>
  );
}
