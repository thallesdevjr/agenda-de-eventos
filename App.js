 React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Evento from './components/Evento';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>⚡ Agenda de Eventos</Text>
        <Text style={styles.headerSubtitle}>Escola Estadual João De Arruda Pinto</Text>
      </View>

      <Evento
        titulo="Palestra: Cybersecurity — Seja o Hacker do Bem"
        data="30/06/2025"
        horario="14:00 – 17:00"
        local="Laboratório de Informática"
        vagas={35}
        inscricaoAberta={true}
      />

      <Evento
        titulo="Feira de Animes — Venha Fantasiado!"
        data="07/07/2025"
        horario="09:00 – 18:00"
        local="Pátio Central" 
        vagas={200}
        inscricaoAberta={true}
      />

      <Evento
        titulo="Maratona de Programação — Quem Codar Mais?"
        data="14/import07/2025"
        horario="08:00 – 20:00"
        local="Sala de Informática"
        vagas={40}
        inscricaoAberta={false}
      />

      <Evento
        titulo="Torneio Gastronômico — O Melhor Prato Vence"
        data="21/07/2025"
        horario="11:00 – 15:00"
        local="Refeitório da Escola"
        vagas={80}
        inscricaoAberta={true}
      />

      <Evento
        titulo="Workshop: Monte seu Próprio PC do Zero"
        data="28/07/2025"
        horario="13:00 – 17:00"
        local="Laboratório de Hardware"
        vagas={20}
        inscricaoAberta={true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D1A',
  },
  header: {
    backgroundColor: '#6C2BD9',
    paddingTop: 56,
    paddingBottom: 24,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#D8B4FE',
  },
});