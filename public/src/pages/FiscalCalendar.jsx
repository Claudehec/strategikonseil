// pages/FiscalCalendar.jsx
import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  AlertCircle,
  CheckCircle2,
  Clock,
  Bell
} from 'lucide-react';
import './FiscalCalendar.css';

const FiscalCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 15)); // March 2024
  const [selectedDate, setSelectedDate] = useState(null);

  const events = [
    { 
      id: 1, 
      title: 'Déclaration TVA', 
      date: '2024-03-15', 
      type: 'fiscal',
      priority: 'high',
      description: 'Déclaration de TVA du 1er trimestre',
      status: 'upcoming'
    },
    { 
      id: 2, 
      title: 'Paiement charges sociales', 
      date: '2024-03-20', 
      type: 'social',
      priority: 'medium',
      description: 'URSSAF - Charges sociales mensuelles',
      status: 'upcoming'
    },
    { 
      id: 3, 
      title: 'Bilan annuel', 
      date: '2024-04-30', 
      type: 'bilan',
      priority: 'high',
      description: 'Clôture de l\'exercice 2023',
      status: 'upcoming'
    },
    { 
      id: 4, 
      title: 'Déclaration CFE', 
      date: '2024-05-15', 
      type: 'fiscal',
      priority: 'medium',
      description: 'Cotisation Foncière des Entreprises',
      status: 'upcoming'
    },
  ];

  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    
    // Add empty days for start of month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }
    
    // Add days of month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  const getEventsForDate = (date) => {
    if (!date) return [];
    const dateStr = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateStr);
  };

  const changeMonth = (increment) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1));
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'priority-high',
      medium: 'priority-medium',
      low: 'priority-low'
    };
    return colors[priority] || '';
  };

  const getTypeIcon = (type) => {
    const icons = {
      fiscal: <AlertCircle size={16} />,
      social: <Clock size={16} />,
      bilan: <CheckCircle2 size={16} />
    };
    return icons[type] || <CalendarIcon size={16} />;
  };

  return (
    <div className="fiscal-calendar fade-in">
      <div className="container">
        <div className="page-header">
          <div>
            <h1>Calendrier fiscal</h1>
            <p>Suivez toutes vos échéances fiscales et sociales</p>
          </div>
          <button className="btn-notification-lg">
            <Bell size={20} />
            <span>Activer les notifications</span>
          </button>
        </div>

        <div className="calendar-layout">
          {/* Main Calendar */}
          <div className="calendar-main card">
            <div className="calendar-header">
              <h2>
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <div className="month-navigation">
                <button onClick={() => changeMonth(-1)} className="nav-btn">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={() => changeMonth(1)} className="nav-btn">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="calendar-grid">
              {weekDays.map(day => (
                <div key={day} className="weekday-header">
                  {day}
                </div>
              ))}
              
              {days.map((date, index) => {
                const dayEvents = date ? getEventsForDate(date) : [];
                const isToday = date && date.toDateString() === new Date().toDateString();
                
                return (
                  <div 
                    key={index} 
                    className={`calendar-day ${!date ? 'empty' : ''} ${isToday ? 'today' : ''} ${selectedDate && date && date.toDateString() === selectedDate.toDateString() ? 'selected' : ''}`}
                    onClick={() => date && setSelectedDate(date)}
                  >
                    {date && (
                      <>
                        <span className="day-number">{date.getDate()}</span>
                        {dayEvents.length > 0 && (
                          <div className="day-events">
                            {dayEvents.map(event => (
                              <div 
                                key={event.id} 
                                className={`event-indicator ${getPriorityColor(event.priority)}`}
                                title={event.title}
                              >
                                {getTypeIcon(event.type)}
                                <span>{event.title}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="calendar-sidebar">
            {/* Upcoming Events */}
            <div className="card upcoming-events">
              <h3>
                <Clock size={20} />
                Échéances à venir
              </h3>
              <div className="events-list">
                {upcomingEvents.slice(0, 5).map(event => (
                  <div key={event.id} className={`event-card ${getPriorityColor(event.priority)}`}>
                    <div className="event-header">
                      <div className="event-type">
                        {getTypeIcon(event.type)}
                        <span>{event.type}</span>
                      </div>
                      <span className="event-date">{event.date}</span>
                    </div>
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                    <div className="event-footer">
                      <span className={`badge badge-${event.priority === 'high' ? 'warning' : 'info'}`}>
                        {event.priority === 'high' ? 'Urgent' : 'À venir'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Date Details */}
            {selectedDate && (
              <div className="card selected-date-details">
                <h3>
                  <CalendarIcon size={20} />
                  {selectedDate.toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </h3>
                <div className="day-details-events">
                  {getEventsForDate(selectedDate).length > 0 ? (
                    getEventsForDate(selectedDate).map(event => (
                      <div key={event.id} className="detail-event">
                        <h4>{event.title}</h4>
                        <p>{event.description}</p>
                        <div className="event-actions">
                          <button className="btn-outline-sm">Ajouter à mon agenda</button>
                          <button className="btn-primary-sm">Voir détails</button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="no-events">Aucune échéance ce jour</p>
                  )}
                </div>
              </div>
            )}

            {/* Legend */}
            <div className="card legend">
              <h3>Légende</h3>
              <div className="legend-items">
                <div className="legend-item">
                  <span className="legend-color priority-high"></span>
                  <span>Urgent</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color priority-medium"></span>
                  <span>À surveiller</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color priority-low"></span>
                  <span>Normal</span>
                </div>
                <div className="legend-item">
                  <AlertCircle size={16} />
                  <span>Fiscal</span>
                </div>
                <div className="legend-item">
                  <Clock size={16} />
                  <span>Social</span>
                </div>
                <div className="legend-item">
                  <CheckCircle2 size={16} />
                  <span>Bilan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="btn btn-primary">
            <Bell size={18} />
            Configurer les rappels automatiques
          </button>
          <button className="btn btn-outline">
            <CalendarIcon size={18} />
            Exporter le calendrier
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiscalCalendar;