import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Calendar, Clock, MapPin, Star, Trash2, Edit3, Save, X, Plane, Hotel, Utensils, Camera, ShoppingBag, Building2, Copy, Download, Share2, Heart, ChevronDown, ChevronUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BUSINESSES } from '../data.js';

const ItineraryPlanner = ({ onClose }) => {
  const [itinerary, setItinerary] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [expandedDays, setExpandedDays] = useState({});
  const [showTips, setShowTips] = useState(true);
  const [draggedItem, setDraggedItem] = useState(null);
  
  // Modal states
  const [modalType, setModalType] = useState('business'); // 'business' or 'custom'
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [customActivity, setCustomActivity] = useState({
    name: '',
    location: '',
    type: 'activity',
    duration: 60,
    notes: ''
  });

  // Quick add suggestions
  const quickSuggestions = [
    { name: 'Victoria Peak', location: 'Central', type: 'sightseeing', duration: 180, icon: '🏔️' },
    { name: 'Star Ferry', location: 'Tsim Sha Tsui', type: 'transport', duration: 30, icon: '⛴️' },
    { name: 'Temple Street Night Market', location: 'Yau Ma Tei', type: 'shopping', duration: 120, icon: '🏮' },
    { name: 'Hong Kong Museum', location: 'Tsim Sha Tsui', type: 'sightseeing', duration: 90, icon: '🏛️' },
  ];

  // Load itinerary from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('hk-itinerary');
    if (saved) {
      setItinerary(JSON.parse(saved));
    }
  }, []);

  // Save itinerary to localStorage
  const saveItinerary = (newItinerary) => {
    setItinerary(newItinerary);
    localStorage.setItem('hk-itinerary', JSON.stringify(newItinerary));
  };

  // Get activities for selected date
  const getActivitiesForDate = (date) => {
    return itinerary
      .filter(item => item.date === date)
      .sort((a, b) => a.time.localeCompare(b.time));
  };

  // Get unique dates in itinerary
  const getItineraryDates = () => {
    const dates = [...new Set(itinerary.map(item => item.date))].sort();
    return dates;
  };

  // Add business to itinerary
  const addBusiness = (businessId, time) => {
    const business = BUSINESSES.find(b => b.id === businessId);
    if (!business) return;

    const newItem = {
      id: Date.now(),
      type: 'business',
      businessId: business.id,
      name: business.name,
      location: business.district,
      date: selectedDate,
      time: time,
      duration: business.sector === 'Hotel' ? 1440 : 120, // 24hrs for hotels, 2hrs for others
      notes: '',
      category: business.sector.toLowerCase()
    };

    const newItinerary = [...itinerary, newItem];
    saveItinerary(newItinerary);
    setShowAddModal(false);
  };

  // Add custom activity
  const addCustomActivity = (activity, time) => {
    const newItem = {
      id: Date.now(),
      type: 'custom',
      name: activity.name,
      location: activity.location,
      date: selectedDate,
      time: time,
      duration: activity.duration,
      notes: activity.notes,
      category: activity.type
    };

    const newItinerary = [...itinerary, newItem];
    saveItinerary(newItinerary);
    setShowAddModal(false);
    setCustomActivity({ name: '', location: '', type: 'activity', duration: 60, notes: '' });
  };

  // Quick add activity
  const quickAddActivity = (suggestion) => {
    const now = new Date();
    const defaultTime = `${(now.getHours() + 1).toString().padStart(2, '0')}:00`;
    
    const newItem = {
      id: Date.now(),
      type: 'custom',
      name: suggestion.name,
      location: suggestion.location,
      date: selectedDate,
      time: defaultTime,
      duration: suggestion.duration,
      notes: `Popular ${suggestion.type} activity`,
      category: suggestion.type
    };

    const newItinerary = [...itinerary, newItem];
    saveItinerary(newItinerary);
  };

  // Duplicate activity to another date
  const duplicateActivity = (item, newDate) => {
    const newItem = {
      ...item,
      id: Date.now(),
      date: newDate
    };
    const newItinerary = [...itinerary, newItem];
    saveItinerary(newItinerary);
  };

  // Toggle day expansion
  const toggleDayExpansion = (date) => {
    setExpandedDays(prev => ({
      ...prev,
      [date]: !prev[date]
    }));
  };

  // Get total trip stats
  const getTripStats = () => {
    const dates = getItineraryDates();
    const totalActivities = itinerary.length;
    const totalDuration = itinerary.reduce((sum, item) => sum + (item.duration || 0), 0);
    const sustainableCount = itinerary.filter(item => item.type === 'business').length;
    
    return {
      days: dates.length,
      activities: totalActivities,
      duration: totalDuration,
      sustainable: sustainableCount
    };
  };

  // Delete item
  const deleteItem = (id) => {
    const newItinerary = itinerary.filter(item => item.id !== id);
    saveItinerary(newItinerary);
  };

  // Update item
  const updateItem = (id, updates) => {
    const newItinerary = itinerary.map(item => 
      item.id === id ? { ...item, ...updates } : item
    );
    saveItinerary(newItinerary);
    setEditingItem(null);
  };

  // Get icon for activity type
  const getActivityIcon = (category, type) => {
    if (type === 'business') {
      switch (category) {
        case 'hotel': return <Hotel size={16} className="text-blue-600" />;
        case 'restaurant': case 'cafe': case 'bakery': return <Utensils size={16} className="text-orange-600" />;
        default: return <Building2 size={16} className="text-gray-600" />;
      }
    }
    
    switch (category) {
      case 'transport': return <Plane size={16} className="text-purple-600" />;
      case 'sightseeing': return <Camera size={16} className="text-green-600" />;
      case 'shopping': return <ShoppingBag size={16} className="text-pink-600" />;
      case 'activity': return <Star size={16} className="text-yellow-600" />;
      default: return <MapPin size={16} className="text-gray-600" />;
    }
  };

  // Format duration
  const formatDuration = (minutes) => {
    if (minutes >= 1440) return `${Math.floor(minutes / 1440)} day(s)`;
    if (minutes >= 60) return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
    return `${minutes}m`;
  };

  // Calculate day total duration
  const getDayDuration = (date) => {
    const activities = getActivitiesForDate(date);
    return activities.reduce((total, activity) => total + (activity.duration || 0), 0);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ArrowLeft 
                onClick={onClose} 
                className="h-6 w-6 cursor-pointer hover:text-blue-200 transition-colors"
              />
              <div>
                <h2 className="text-xl font-bold">Trip Planner</h2>
                <p className="text-blue-100 text-sm">Plan your Hong Kong itinerary</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              <Plus size={16} />
              Add Activity
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Simple Welcome Message for New Users */}
          {itinerary.length === 0 && (
            <div className="mb-6 text-center bg-blue-50 rounded-lg p-8">
              <Calendar size={48} className="mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Plan Your Hong Kong Trip</h3>
              <p className="text-gray-600 mb-6">Add activities and places you want to visit</p>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                <Plus size={18} />
                Add First Activity
              </button>
            </div>
          )}

          {/* Simple Date Navigation */}
          {itinerary.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="text-sm text-gray-600">
                  {getActivitiesForDate(selectedDate).length} activities planned
                </div>
              </div>
            </div>
          )}

          {/* Daily Activities */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h3>
              <div className="text-sm text-gray-500">
                {getActivitiesForDate(selectedDate).length} activities • {formatDuration(getDayDuration(selectedDate))} total
              </div>
            </div>

            {getActivitiesForDate(selectedDate).length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Calendar size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg mb-4">No activities planned for this date</p>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  <Plus size={16} />
                  Add Activity
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {getActivitiesForDate(selectedDate).map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                    {editingItem === item.id ? (
                      <EditItemForm 
                        item={item} 
                        onSave={(updates) => updateItem(item.id, updates)}
                        onCancel={() => setEditingItem(null)}
                      />
                    ) : (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-center min-w-[60px]">
                            <div className="text-lg font-semibold text-blue-600">{item.time}</div>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{item.name}</div>
                            <div className="text-sm text-gray-500">{item.location}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setEditingItem(item.id)}
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            <Edit3 size={16} />
                          </button>
                          <button
                            onClick={() => deleteItem(item.id)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                <button
                  onClick={() => setShowAddModal(true)}
                  className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                >
                  <Plus size={16} />
                  Add another activity
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Activity Modal */}
      {showAddModal && (
        <AddActivityModal
          date={selectedDate}
          modalType={modalType}
          setModalType={setModalType}
          selectedBusiness={selectedBusiness}
          setSelectedBusiness={setSelectedBusiness}
          customActivity={customActivity}
          setCustomActivity={setCustomActivity}
          onAddBusiness={addBusiness}
          onAddCustom={addCustomActivity}
          onClose={() => {
            setShowAddModal(false);
            setModalType('business');
            setSelectedBusiness('');
            setCustomActivity({ name: '', location: '', type: 'activity', duration: 60, notes: '' });
          }}
        />
      )}
    </div>
  );
};

// Edit Item Form Component
const EditItemForm = ({ item, onSave, onCancel }) => {
  const [name, setName] = useState(item.name);
  const [location, setLocation] = useState(item.location);
  const [time, setTime] = useState(item.time);

  return (
    <div className="space-y-3">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Activity name"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      <div className="grid grid-cols-2 gap-3">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onSave({ name, location, time })}
          className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="px-3 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

// Add Activity Modal Component
const AddActivityModal = ({ 
  date, modalType, setModalType, selectedBusiness, setSelectedBusiness,
  customActivity, setCustomActivity, onAddBusiness, onAddCustom, onClose 
}) => {
  const [time, setTime] = useState('09:00');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalType === 'business' && selectedBusiness) {
      onAddBusiness(selectedBusiness, time);
    } else if (modalType === 'custom' && customActivity.name && customActivity.location) {
      onAddCustom(customActivity, time);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full shadow-xl">
        <div className="p-6">
          {/* Simple Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Add Activity</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Activity Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Activity Name</label>
              <input
                type="text"
                value={modalType === 'business' ? (selectedBusiness ? BUSINESSES.find(b => b.id === selectedBusiness)?.name || '' : '') : customActivity.name}
                onChange={(e) => {
                  if (modalType === 'custom') {
                    setCustomActivity({...customActivity, name: e.target.value});
                  }
                }}
                placeholder={modalType === 'business' ? 'Choose from dropdown below' : 'Victoria Peak, Star Ferry...'}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                readOnly={modalType === 'business'}
              />
            </div>

            {/* Business Selector or Location */}
            {modalType === 'business' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Choose Business</label>
                <select
                  value={selectedBusiness}
                  onChange={(e) => setSelectedBusiness(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">Select a sustainable business...</option>
                  {BUSINESSES.map(business => (
                    <option key={business.id} value={business.id}>
                      {business.name} - {business.district}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  value={customActivity.location}
                  onChange={(e) => setCustomActivity({...customActivity, location: e.target.value})}
                  placeholder="Central, Tsim Sha Tsui..."
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Type Toggle */}
            <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
              <button
                type="button"
                onClick={() => setModalType('business')}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  modalType === 'business' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Green Business
              </button>
              <button
                type="button"
                onClick={() => setModalType('custom')}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  modalType === 'custom' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Custom Activity
              </button>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Add Activity
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPlanner;