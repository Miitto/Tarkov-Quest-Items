import { RefObject, useRef, useEffect, useState } from "react";
import { Wipe } from "../types";
import styles from "./Navbar.module.scss";
import { invoke } from "@tauri-apps/api/tauri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navbar() {
    const [wipes, setWipes] = useState<Wipe[]>([]);
    const [activeWipe, setActiveWipe] = useState(0);

    let dialog: RefObject<HTMLDialogElement> = useRef(null);

    useEffect(() => {
        invoke("get_all_wipes").then((wipes) => {
            setWipes(wipes as Wipe[]);
        });
    }, []);

    function newWipe() {
        dialog?.current?.showModal();
    }

    function createWipe(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        invoke<Wipe>("create_wipe", {
            name: (event.target as any).elements[0].value,
        }).then((wipe) => {
            setWipes([...wipes, wipe as Wipe]);
            setActiveWipe(wipe.id);
            dialog?.current?.close();
        });
    }

    return (
        <nav className={styles.nav}>
            <ul>
                {wipes.map((wipe: Wipe, idx: number) => {
                    return (
                        <WipeLine
                            wipe={wipe}
                            active={idx == activeWipe}
                            click={() => setActiveWipe(idx)}
                        />
                    );
                })}
            </ul>
            <span>
                <button onClick={newWipe}>
                    <FontAwesomeIcon icon="square-plus" />
                </button>
                <button>
                    <FontAwesomeIcon icon="trash" />
                </button>
            </span>
            <dialog
                ref={dialog}
                onClick={(event) => {
                    if (event.target == dialog.current)
                        dialog?.current?.close();
                }}
            >
                <form onSubmit={createWipe}>
                    <label>Name:</label>
                    <input type="text" />
                    <button
                        type="submit"
                        className="tarkov-btn"
                    >
                        Create
                    </button>
                </form>
            </dialog>
        </nav>
    );
}

function WipeLine({
    wipe,
    active,
    click,
}: {
    wipe: Wipe;
    active: boolean;
    click: () => void;
}) {
    return (
        <li>
            <button
                className={active ? styles.active : ""}
                onClick={click}
            >
                {wipe.name}
            </button>
        </li>
    );
}
