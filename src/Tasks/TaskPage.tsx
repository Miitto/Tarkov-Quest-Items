import React, { RefObject } from "react";
import { VariableSizeList as List } from "react-window";

import { TaskLine } from "./TaskLine";
import { CollatedTask } from "../types";

const Row = ({ index, style, setSize, tasks, setTaskDialog }: any) => (
    <div style={style}>
        <TaskLine
            tasks={tasks}
            setTaskDialog={setTaskDialog}
            setSize={setSize}
            index={index}
        />
    </div>
);

interface Props {
    tasks: CollatedTask[];
    setTaskDialog: (dialog: JSX.Element) => void;
}

export class TaskPage extends React.Component<Props> {
    state = {
        rowSizes: new Array(1000).fill(true).reduce((acc, _, i) => {
            acc[i] = 34;
            return acc;
        }, {}),
    };

    constructor(props: any) {
        super(props);
    }

    listRef: RefObject<List<any>> = React.createRef();

    render() {
        return (
            <List
                ref={this.listRef}
                className="List"
                height={500}
                itemCount={this.props.tasks.length}
                itemSize={this.getSize}
                width={300}
            >
                {(props) => (
                    <Row
                        {...props}
                        tasks={this.props.tasks}
                        setTaskDialog={this.props.setTaskDialog}
                        setSize={this.setSize}
                    />
                )}
            </List>
        );
    }

    setSize = (i: number, size: number) => {
        console.log("Setting size", i, size);
        if (this.listRef.current) {
            this.listRef.current.resetAfterIndex(i);
        }
        this.setState((prevState: any) => ({
            rowSizes: {
                ...prevState.rowSizes,
                [i]: prevState.rowSizes[i] === 34 ? size : 34,
            },
        }));
    };

    getSize = (i: number) => {
        return this.state.rowSizes[i];
    };
}
