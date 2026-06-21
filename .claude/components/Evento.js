import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Evento({ titulo, data, horario, local, vagas, inscricaoAberta }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.titulo} numberOfLines={2}>{titulo}</Text>
        <View style={[styles.badge, inscricaoAberta ? styles.badgeAberta : styles.badgeFechada]}>
          <Text style={[styles.badgeTexto, inscricaoAberta ? styles.badgeTextoAberta : styles.badgeTextoFechada]}>
            {inscricaoAberta ? 'Inscrições abertas' : 'Encerrado'}
          </Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.infoRow}>
        <Text style={styles.infoIcone}>📆</Text>
        <View>
          <Text style={styles.infoRotulo}>Data</Text>
          <Text style={styles.infoValor}>{data}</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoIcone}>🕐</Text>
        <View>
          <Text style={styles.infoRotulo}>Horário</Text>
          <Text style={styles.infoValor}>{horario}</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoIcone}>📍</Text>
        <View>
          <Text style={styles.infoRotulo}>Local</Text>
          <Text style={styles.infoValor}>{local}</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoIcone}>👥</Text>
        <View>
          <Text style={styles.infoRotulo}>Vagas</Text>
          <Text style={styles.infoValor}>{vagas} vagas disponíveis</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 8,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    flex: 1,
    lineHeight: 22,
  },
  badge: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeAberta: {
    backgroundColor: '#DCFCE7',
  },
  badgeFechada: {
    backgroundColor: '#FEE2E2',
  },
  badgeTexto: {
    fontSize: 11,
    fontWeight: '600',
  },
  badgeTextoAberta: {
    color: '#166534',
  },
  badgeTextoFechada: {
    color: '#991B1B',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    gap: 10,
  },
  infoIcone: {
    fontSize: 16,
    marginTop: 1,
  },
  infoRotulo: {
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 1,
  },
  infoValor: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
});