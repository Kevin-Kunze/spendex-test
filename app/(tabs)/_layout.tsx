import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#ccc',
            height: 84,
            paddingBottom: 10,
            paddingTop: 10,
          },
        }}>
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name='home' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='transactions'
          options={{
            title: 'Transactions',
            headerShown: false,
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name='card' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='budget'
          options={{
            title: 'Budget',
            headerShown: false,
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name='wallet' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='overview'
          options={{
            title: 'Overview',
            headerShown: false,
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name='stats-chart' size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  )
}
