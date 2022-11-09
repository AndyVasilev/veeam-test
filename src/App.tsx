import React from 'react';
import { reducer, defaultSchema, init } from './model';
import Tabs from "./components/Tabs/Tabs";
import Tab from "./components/Tabs/Tab";
import FormConfig from "./components/FormGenerator/FormConfig/FormConfig";
import FormResult from "./components/FormGenerator/FormResult/FormResult";

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, defaultSchema, init);

  return (
    <div className="h-full sm:p-3 md:p-5 lg:p-10 antialiased">
        <div className="relative flex flex-col h-full rounded-lg border border-slate-200 overflow-hidden">
            <Tabs>
                <Tab title="Config">
                    <FormConfig state={state} dispatch={dispatch} />
                </Tab>
                <Tab title="Result">
                    <FormResult schema={state.schema}></FormResult>
                </Tab>
            </Tabs>
        </div>
    </div>
  );
}
