import styles from "./Items.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ItemTitleBar({
    sort,
    setSort,
}: {
    sort: string;
    setSort: (sort: string) => void;
}) {
    return (
        <div className={styles.titleBar}>
            <button
                onClick={() => {
                    if (sort.startsWith("fir")) {
                        if (sort.endsWith("-")) {
                            setSort("fir");
                        } else {
                            setSort("fir-");
                        }
                    } else {
                        setSort("fir");
                    }
                }}
            >
                FIR
                {sort.startsWith("fir") ? (
                    sort.endsWith("-") ? (
                        <FontAwesomeIcon icon="chevron-up" />
                    ) : (
                        <FontAwesomeIcon icon="chevron-down" />
                    )
                ) : (
                    ""
                )}
            </button>
            <button
                onClick={() => {
                    if (sort.startsWith("name")) {
                        if (sort.endsWith("-")) {
                            setSort("name");
                        } else {
                            setSort("name-");
                        }
                    } else {
                        setSort("name");
                    }
                }}
            >
                Name
                {sort.startsWith("name") ? (
                    sort.endsWith("-") ? (
                        <FontAwesomeIcon icon="chevron-up" />
                    ) : (
                        <FontAwesomeIcon icon="chevron-down" />
                    )
                ) : (
                    ""
                )}
            </button>
            <button
                onClick={() => {
                    if (sort.startsWith("dtl")) {
                        if (sort.endsWith("-")) {
                            setSort("dtl");
                        } else {
                            setSort("dtl-");
                        }
                    } else {
                        setSort("dtl");
                    }
                }}
            >
                DTL
                {sort.startsWith("dtl") ? (
                    sort.endsWith("-") ? (
                        <FontAwesomeIcon icon="chevron-up" />
                    ) : (
                        <FontAwesomeIcon icon="chevron-down" />
                    )
                ) : (
                    ""
                )}
            </button>
            <div>
                <button
                    onClick={() => {
                        if (sort.startsWith("mindur")) {
                            if (sort.endsWith("-")) {
                                setSort("mindur");
                            } else {
                                setSort("mindur-");
                            }
                        } else {
                            setSort("mindur");
                        }
                    }}
                >
                    Min
                    {sort.startsWith("mindur") ? (
                        sort.endsWith("-") ? (
                            <FontAwesomeIcon icon="chevron-up" />
                        ) : (
                            <FontAwesomeIcon icon="chevron-down" />
                        )
                    ) : (
                        ""
                    )}
                </button>
                <button
                    onClick={() => {
                        if (sort.startsWith("maxdur")) {
                            if (sort.endsWith("-")) {
                                setSort("maxdur");
                            } else {
                                setSort("maxdur-");
                            }
                        } else {
                            setSort("maxdur");
                        }
                    }}
                >
                    Max
                    {sort.startsWith("maxdur") ? (
                        sort.endsWith("-") ? (
                            <FontAwesomeIcon icon="chevron-up" />
                        ) : (
                            <FontAwesomeIcon icon="chevron-down" />
                        )
                    ) : (
                        ""
                    )}
                </button>
            </div>
            <button
                onClick={() => {
                    if (sort.startsWith("collected")) {
                        if (sort.endsWith("-")) {
                            setSort("collected");
                        } else {
                            setSort("collected-");
                        }
                    } else {
                        setSort("collected");
                    }
                }}
            >
                Collected
                {sort.startsWith("collected") ? (
                    sort.endsWith("-") ? (
                        <FontAwesomeIcon icon="chevron-up" />
                    ) : (
                        <FontAwesomeIcon icon="chevron-down" />
                    )
                ) : (
                    ""
                )}
            </button>
            <button
                onClick={() => {
                    if (sort.startsWith("total")) {
                        if (sort.endsWith("-")) {
                            setSort("total");
                        } else {
                            setSort("total-");
                        }
                    } else {
                        setSort("total");
                    }
                }}
            >
                Required
                {sort.startsWith("total") ? (
                    sort.endsWith("-") ? (
                        <FontAwesomeIcon icon="chevron-up" />
                    ) : (
                        <FontAwesomeIcon icon="chevron-down" />
                    )
                ) : (
                    ""
                )}
            </button>
        </div>
    );
}
