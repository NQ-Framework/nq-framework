import { Button, Flex, Text } from '@chakra-ui/react';
import { Action, WorkflowTrigger } from '@nqframework/models';
import * as React from 'react';

export const Toolbox: React.FC<{
  actions: Action[];
  triggers: WorkflowTrigger[];
  addAction: (action: Action) => void;
  addTrigger: (trigger: WorkflowTrigger) => void;
}> = ({ actions, triggers, addAction, addTrigger }) => {
  return (
    <>
      <Flex dir="row" alignItems="center">
        <Text fontSize="xl">Akcije:</Text>
        {actions && actions.map && actions.length > 0 ? (
          actions.map((a) => (
            <Button
              key={a.id}
              mx={15}
              onClick={() => {
                addAction(a);
              }}
            >
              {a.name}
            </Button>
          ))
        ) : (
          <Text>Nema dostupnih akcija</Text>
        )}
      </Flex>
      <Flex mt={4} dir="row" alignItems="center">
        <Text fontSize="xl">Trigeri:&nbsp;</Text>
        {triggers && triggers.map && triggers.length > 0 ? (
          triggers.map((t) => (
            <Button
              backgroundColor={t.color}
              key={t.name}
              mx={15}
              onClick={() => {
                addTrigger(t);
              }}
            >
              {t.name}
            </Button>
          ))
        ) : (
          <Text>Nema dostupnih triggera</Text>
        )}
      </Flex>
    </>
  );
};
