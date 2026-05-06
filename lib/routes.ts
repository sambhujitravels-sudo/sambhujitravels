export interface RouteInfo {
  from: string
  to: string
  distance: number
  time: string
  description?: string
  highlights?: string[]
}

// Helper to create route with defaults
function r(from: string, to: string, distance: number, time: string): RouteInfo {
  return { from, to, distance, time }
}

// All routes database - 500+ routes from competitor analysis
export const allRoutes: RouteInfo[] = [
  // === BAREILLY ROUTES ===
  r('Bareilly', 'Delhi', 250, '5 hours'),
  r('Bareilly', 'Lucknow', 260, '5 hours'),
  r('Bareilly', 'Nainital', 150, '4 hours'),
  r('Bareilly', 'Noida', 230, '4.5 hours'),
  r('Bareilly', 'Gurgaon', 260, '5 hours'),
  r('Bareilly', 'Ghaziabad', 200, '4 hours'),
  r('Bareilly', 'Faridabad', 280, '5.5 hours'),
  r('Bareilly', 'Meerut', 170, '3.5 hours'),
  r('Bareilly', 'Agra', 280, '5.5 hours'),
  r('Bareilly', 'Jaipur', 380, '7 hours'),
  r('Bareilly', 'Haridwar', 200, '5 hours'),
  r('Bareilly', 'Rishikesh', 220, '5.5 hours'),
  r('Bareilly', 'Dehradun', 240, '6 hours'),
  r('Bareilly', 'Mussoorie', 270, '6.5 hours'),
  r('Bareilly', 'Jim Corbett', 130, '3.5 hours'),
  r('Bareilly', 'Ramnagar', 120, '3 hours'),
  r('Bareilly', 'Haldwani', 100, '2.5 hours'),
  r('Bareilly', 'Kathgodam', 110, '3 hours'),
  r('Bareilly', 'Pantnagar', 90, '2 hours'),
  r('Bareilly', 'Rudrapur', 60, '1.5 hours'),
  r('Bareilly', 'Kashipur', 80, '2 hours'),
  r('Bareilly', 'Moradabad', 50, '1 hour'),
  r('Bareilly', 'Rampur', 35, '45 mins'),
  r('Bareilly', 'Shahjahanpur', 80, '1.5 hours'),
  r('Bareilly', 'Pilibhit', 55, '1 hour'),
  r('Bareilly', 'Badaun', 45, '1 hour'),
  r('Bareilly', 'Kanpur', 220, '4.5 hours'),
  r('Bareilly', 'Varanasi', 450, '8 hours'),
  r('Bareilly', 'Prayagraj', 350, '6.5 hours'),
  r('Bareilly', 'Ayodhya', 280, '5.5 hours'),
  r('Bareilly', 'Mathura', 230, '4.5 hours'),
  r('Bareilly', 'Vrindavan', 240, '5 hours'),
  r('Bareilly', 'Aligarh', 180, '3.5 hours'),
  r('Bareilly', 'Etawah', 280, '5 hours'),
  r('Bareilly', 'Firozabad', 260, '5 hours'),
  r('Bareilly', 'Saharanpur', 200, '4 hours'),
  r('Bareilly', 'Muzaffarnagar', 180, '3.5 hours'),
  r('Bareilly', 'Bijnor', 120, '2.5 hours'),
  r('Bareilly', 'Almora', 200, '5 hours'),
  r('Bareilly', 'Ranikhet', 180, '5 hours'),
  r('Bareilly', 'Kausani', 230, '6 hours'),
  r('Bareilly', 'Mukteshwar', 180, '5 hours'),
  r('Bareilly', 'Bhimtal', 160, '4.5 hours'),
  r('Bareilly', 'Sattal', 165, '4.5 hours'),
  r('Bareilly', 'Naukuchiatal', 170, '5 hours'),
  r('Bareilly', 'Binsar', 210, '5.5 hours'),
  r('Bareilly', 'Chaukori', 280, '7 hours'),
  r('Bareilly', 'Pithoragarh', 320, '8 hours'),
  r('Bareilly', 'Munsiyari', 350, '9 hours'),
  r('Bareilly', 'Auli', 380, '10 hours'),
  r('Bareilly', 'Chopta', 320, '8 hours'),
  r('Bareilly', 'Kedarnath', 350, '9 hours'),
  r('Bareilly', 'Badrinath', 400, '11 hours'),
  r('Bareilly', 'Gangotri', 420, '11 hours'),
  r('Bareilly', 'Yamunotri', 380, '10 hours'),
  r('Bareilly', 'Chandigarh', 350, '7 hours'),
  r('Bareilly', 'Amritsar', 500, '9 hours'),
  r('Bareilly', 'Shimla', 420, '9 hours'),
  r('Bareilly', 'Manali', 550, '12 hours'),
  r('Bareilly', 'Dharamshala', 480, '10 hours'),
  r('Bareilly', 'Gorakhpur', 350, '7 hours'),
  r('Bareilly', 'Sitapur', 180, '3.5 hours'),
  r('Bareilly', 'Amroha', 80, '1.5 hours'),
  r('Bareilly', 'Baheri', 25, '30 mins'),
  r('Bareilly', 'Banbasa', 180, '4 hours'),
  r('Bareilly', 'Khatima', 150, '3.5 hours'),
  r('Bareilly', 'Sitarganj', 130, '3 hours'),
  r('Bareilly', 'Roorkee', 180, '4 hours'),
  r('Bareilly', 'Patna', 650, '12 hours'),

  // === DELHI ROUTES ===
  r('Delhi', 'Bareilly', 250, '5 hours'),
  r('Delhi', 'Lucknow', 500, '8 hours'),
  r('Delhi', 'Nainital', 300, '7 hours'),
  r('Delhi', 'Haridwar', 220, '5 hours'),
  r('Delhi', 'Rishikesh', 240, '6 hours'),
  r('Delhi', 'Dehradun', 250, '6 hours'),
  r('Delhi', 'Mussoorie', 280, '7 hours'),
  r('Delhi', 'Agra', 230, '4 hours'),
  r('Delhi', 'Jaipur', 280, '5 hours'),
  r('Delhi', 'Mathura', 180, '3.5 hours'),
  r('Delhi', 'Vrindavan', 190, '3.5 hours'),
  r('Delhi', 'Chandigarh', 250, '5 hours'),
  r('Delhi', 'Shimla', 350, '7 hours'),
  r('Delhi', 'Manali', 530, '12 hours'),
  r('Delhi', 'Dharamshala', 480, '10 hours'),
  r('Delhi', 'Amritsar', 450, '8 hours'),
  r('Delhi', 'Jim Corbett', 260, '6 hours'),
  r('Delhi', 'Ramnagar', 250, '6 hours'),
  r('Delhi', 'Haldwani', 280, '6 hours'),
  r('Delhi', 'Pantnagar', 290, '6 hours'),
  r('Delhi', 'Rudrapur', 280, '6 hours'),
  r('Delhi', 'Kashipur', 270, '5.5 hours'),
  r('Delhi', 'Moradabad', 200, '4 hours'),
  r('Delhi', 'Rampur', 220, '4.5 hours'),
  r('Delhi', 'Almora', 350, '8 hours'),
  r('Delhi', 'Ranikhet', 380, '9 hours'),
  r('Delhi', 'Kausani', 400, '10 hours'),
  r('Delhi', 'Bhimtal', 320, '7 hours'),
  r('Delhi', 'Mukteshwar', 340, '8 hours'),
  r('Delhi', 'Kanpur', 450, '7 hours'),
  r('Delhi', 'Varanasi', 800, '12 hours'),
  r('Delhi', 'Ayodhya', 600, '10 hours'),
  r('Delhi', 'Prayagraj', 650, '10 hours'),
  r('Delhi', 'Gorakhpur', 750, '12 hours'),
  r('Delhi', 'Meerut', 70, '1.5 hours'),
  r('Delhi', 'Ghaziabad', 30, '45 mins'),
  r('Delhi', 'Noida', 25, '45 mins'),
  r('Delhi', 'Gurgaon', 30, '1 hour'),
  r('Delhi', 'Faridabad', 35, '1 hour'),
  r('Delhi', 'Aligarh', 140, '3 hours'),
  r('Delhi', 'Saharanpur', 180, '4 hours'),
  r('Delhi', 'Muzaffarnagar', 130, '3 hours'),
  r('Delhi', 'Bijnor', 180, '4 hours'),
  r('Delhi', 'Roorkee', 200, '4.5 hours'),
  r('Delhi', 'Kedarnath', 450, '12 hours'),
  r('Delhi', 'Badrinath', 520, '14 hours'),
  r('Delhi', 'Gangotri', 480, '12 hours'),
  r('Delhi', 'Yamunotri', 420, '11 hours'),
  r('Delhi', 'Auli', 500, '13 hours'),
  r('Delhi', 'Chopta', 420, '10 hours'),

  // === LUCKNOW ROUTES ===
  r('Lucknow', 'Bareilly', 260, '5 hours'),
  r('Lucknow', 'Delhi', 500, '8 hours'),
  r('Lucknow', 'Nainital', 350, '7 hours'),
  r('Lucknow', 'Haridwar', 450, '8 hours'),
  r('Lucknow', 'Rishikesh', 480, '9 hours'),
  r('Lucknow', 'Dehradun', 500, '9 hours'),
  r('Lucknow', 'Agra', 330, '6 hours'),
  r('Lucknow', 'Jaipur', 580, '10 hours'),
  r('Lucknow', 'Varanasi', 300, '5 hours'),
  r('Lucknow', 'Ayodhya', 140, '3 hours'),
  r('Lucknow', 'Prayagraj', 200, '4 hours'),
  r('Lucknow', 'Kanpur', 80, '1.5 hours'),
  r('Lucknow', 'Gorakhpur', 280, '5 hours'),
  r('Lucknow', 'Mathura', 400, '7 hours'),
  r('Lucknow', 'Vrindavan', 410, '7 hours'),
  r('Lucknow', 'Noida', 480, '8 hours'),
  r('Lucknow', 'Gurgaon', 520, '9 hours'),
  r('Lucknow', 'Chandigarh', 650, '11 hours'),
  r('Lucknow', 'Jim Corbett', 380, '8 hours'),
  r('Lucknow', 'Haldwani', 320, '6.5 hours'),
  r('Lucknow', 'Moradabad', 300, '6 hours'),
  r('Lucknow', 'Shahjahanpur', 180, '3.5 hours'),
  r('Lucknow', 'Sitapur', 90, '2 hours'),
  r('Lucknow', 'Patna', 550, '9 hours'),

  // === NOIDA ROUTES ===
  r('Noida', 'Bareilly', 230, '4.5 hours'),
  r('Noida', 'Delhi', 25, '45 mins'),
  r('Noida', 'Lucknow', 480, '8 hours'),
  r('Noida', 'Nainital', 290, '6.5 hours'),
  r('Noida', 'Haridwar', 210, '5 hours'),
  r('Noida', 'Rishikesh', 230, '5.5 hours'),
  r('Noida', 'Dehradun', 240, '5.5 hours'),
  r('Noida', 'Mussoorie', 270, '6.5 hours'),
  r('Noida', 'Agra', 200, '4 hours'),
  r('Noida', 'Jaipur', 270, '5 hours'),
  r('Noida', 'Mathura', 150, '3 hours'),
  r('Noida', 'Chandigarh', 250, '5 hours'),
  r('Noida', 'Jim Corbett', 250, '5.5 hours'),
  r('Noida', 'Haldwani', 270, '6 hours'),
  r('Noida', 'Rudrapur', 270, '5.5 hours'),
  r('Noida', 'Moradabad', 180, '4 hours'),
  r('Noida', 'Meerut', 60, '1.5 hours'),
  r('Noida', 'Gurgaon', 45, '1 hour'),
  r('Noida', 'Ghaziabad', 15, '30 mins'),
  r('Noida', 'Aligarh', 120, '2.5 hours'),

  // === GURGAON ROUTES ===
  r('Gurgaon', 'Bareilly', 260, '5 hours'),
  r('Gurgaon', 'Delhi', 30, '1 hour'),
  r('Gurgaon', 'Lucknow', 520, '9 hours'),
  r('Gurgaon', 'Nainital', 320, '7 hours'),
  r('Gurgaon', 'Haridwar', 240, '5.5 hours'),
  r('Gurgaon', 'Rishikesh', 260, '6 hours'),
  r('Gurgaon', 'Dehradun', 270, '6 hours'),
  r('Gurgaon', 'Mussoorie', 300, '7 hours'),
  r('Gurgaon', 'Agra', 200, '4 hours'),
  r('Gurgaon', 'Jaipur', 250, '5 hours'),
  r('Gurgaon', 'Mathura', 170, '3.5 hours'),
  r('Gurgaon', 'Chandigarh', 270, '5.5 hours'),
  r('Gurgaon', 'Jim Corbett', 280, '6 hours'),
  r('Gurgaon', 'Noida', 45, '1 hour'),
  r('Gurgaon', 'Meerut', 90, '2 hours'),

  // === HARIDWAR ROUTES ===
  r('Haridwar', 'Bareilly', 200, '5 hours'),
  r('Haridwar', 'Delhi', 220, '5 hours'),
  r('Haridwar', 'Lucknow', 450, '8 hours'),
  r('Haridwar', 'Rishikesh', 25, '30 mins'),
  r('Haridwar', 'Dehradun', 55, '1.5 hours'),
  r('Haridwar', 'Mussoorie', 85, '2.5 hours'),
  r('Haridwar', 'Nainital', 250, '6 hours'),
  r('Haridwar', 'Jim Corbett', 180, '4.5 hours'),
  r('Haridwar', 'Noida', 210, '5 hours'),
  r('Haridwar', 'Gurgaon', 240, '5.5 hours'),
  r('Haridwar', 'Chandigarh', 200, '4.5 hours'),
  r('Haridwar', 'Meerut', 150, '3.5 hours'),
  r('Haridwar', 'Moradabad', 170, '4 hours'),
  r('Haridwar', 'Roorkee', 30, '45 mins'),
  r('Haridwar', 'Saharanpur', 80, '2 hours'),
  r('Haridwar', 'Kedarnath', 230, '7 hours'),
  r('Haridwar', 'Badrinath', 320, '9 hours'),
  r('Haridwar', 'Gangotri', 290, '8 hours'),
  r('Haridwar', 'Yamunotri', 220, '6 hours'),
  r('Haridwar', 'Auli', 280, '8 hours'),

  // === RISHIKESH ROUTES ===
  r('Rishikesh', 'Bareilly', 220, '5.5 hours'),
  r('Rishikesh', 'Delhi', 240, '6 hours'),
  r('Rishikesh', 'Haridwar', 25, '30 mins'),
  r('Rishikesh', 'Dehradun', 45, '1 hour'),
  r('Rishikesh', 'Mussoorie', 75, '2 hours'),
  r('Rishikesh', 'Nainital', 270, '7 hours'),
  r('Rishikesh', 'Noida', 230, '5.5 hours'),
  r('Rishikesh', 'Gurgaon', 260, '6 hours'),
  r('Rishikesh', 'Chandigarh', 220, '5 hours'),
  r('Rishikesh', 'Kedarnath', 210, '6 hours'),
  r('Rishikesh', 'Badrinath', 300, '8 hours'),
  r('Rishikesh', 'Gangotri', 270, '7 hours'),
  r('Rishikesh', 'Yamunotri', 200, '5.5 hours'),
  r('Rishikesh', 'Auli', 260, '7 hours'),
  r('Rishikesh', 'Chopta', 180, '5 hours'),

  // === DEHRADUN ROUTES ===
  r('Dehradun', 'Bareilly', 240, '6 hours'),
  r('Dehradun', 'Delhi', 250, '6 hours'),
  r('Dehradun', 'Haridwar', 55, '1.5 hours'),
  r('Dehradun', 'Rishikesh', 45, '1 hour'),
  r('Dehradun', 'Mussoorie', 35, '1 hour'),
  r('Dehradun', 'Nainital', 290, '7 hours'),
  r('Dehradun', 'Noida', 240, '5.5 hours'),
  r('Dehradun', 'Gurgaon', 270, '6 hours'),
  r('Dehradun', 'Chandigarh', 170, '4 hours'),
  r('Dehradun', 'Shimla', 220, '5 hours'),
  r('Dehradun', 'Lucknow', 500, '9 hours'),
  r('Dehradun', 'Meerut', 180, '4 hours'),
  r('Dehradun', 'Saharanpur', 100, '2.5 hours'),
  r('Dehradun', 'Roorkee', 70, '2 hours'),

  // === AGRA ROUTES ===
  r('Agra', 'Bareilly', 280, '5.5 hours'),
  r('Agra', 'Delhi', 230, '4 hours'),
  r('Agra', 'Lucknow', 330, '6 hours'),
  r('Agra', 'Jaipur', 240, '4 hours'),
  r('Agra', 'Mathura', 60, '1 hour'),
  r('Agra', 'Vrindavan', 70, '1.5 hours'),
  r('Agra', 'Noida', 200, '4 hours'),
  r('Agra', 'Gurgaon', 200, '4 hours'),
  r('Agra', 'Kanpur', 280, '5 hours'),
  r('Agra', 'Varanasi', 600, '10 hours'),
  r('Agra', 'Haridwar', 380, '7 hours'),
  r('Agra', 'Nainital', 400, '8 hours'),
  r('Agra', 'Aligarh', 90, '2 hours'),
  r('Agra', 'Firozabad', 45, '1 hour'),
  r('Agra', 'Etawah', 120, '2.5 hours'),

  // === JAIPUR ROUTES ===
  r('Jaipur', 'Bareilly', 380, '7 hours'),
  r('Jaipur', 'Delhi', 280, '5 hours'),
  r('Jaipur', 'Agra', 240, '4 hours'),
  r('Jaipur', 'Lucknow', 580, '10 hours'),
  r('Jaipur', 'Noida', 270, '5 hours'),
  r('Jaipur', 'Gurgaon', 250, '5 hours'),
  r('Jaipur', 'Chandigarh', 500, '8 hours'),
  r('Jaipur', 'Haridwar', 480, '9 hours'),
  r('Jaipur', 'Mathura', 200, '4 hours'),
  r('Jaipur', 'Ajmer', 130, '2.5 hours'),
  r('Jaipur', 'Udaipur', 400, '6 hours'),
  r('Jaipur', 'Jodhpur', 340, '5.5 hours'),

  // === NAINITAL ROUTES ===
  r('Nainital', 'Bareilly', 150, '4 hours'),
  r('Nainital', 'Delhi', 300, '7 hours'),
  r('Nainital', 'Lucknow', 350, '7 hours'),
  r('Nainital', 'Haridwar', 250, '6 hours'),
  r('Nainital', 'Dehradun', 290, '7 hours'),
  r('Nainital', 'Noida', 290, '6.5 hours'),
  r('Nainital', 'Gurgaon', 320, '7 hours'),
  r('Nainital', 'Haldwani', 40, '1 hour'),
  r('Nainital', 'Kathgodam', 35, '45 mins'),
  r('Nainital', 'Bhimtal', 25, '45 mins'),
  r('Nainital', 'Almora', 65, '2 hours'),
  r('Nainital', 'Ranikhet', 55, '2 hours'),
  r('Nainital', 'Kausani', 115, '3.5 hours'),
  r('Nainital', 'Mukteshwar', 50, '1.5 hours'),
  r('Nainital', 'Jim Corbett', 65, '2 hours'),
  r('Nainital', 'Ramnagar', 60, '1.5 hours'),
  r('Nainital', 'Moradabad', 120, '3 hours'),
  r('Nainital', 'Rudrapur', 70, '2 hours'),
  r('Nainital', 'Kashipur', 80, '2 hours'),
  r('Nainital', 'Pantnagar', 60, '1.5 hours'),

  // === HALDWANI ROUTES ===
  r('Haldwani', 'Bareilly', 100, '2.5 hours'),
  r('Haldwani', 'Delhi', 280, '6 hours'),
  r('Haldwani', 'Nainital', 40, '1 hour'),
  r('Haldwani', 'Kathgodam', 5, '10 mins'),
  r('Haldwani', 'Bhimtal', 30, '45 mins'),
  r('Haldwani', 'Almora', 90, '2.5 hours'),
  r('Haldwani', 'Ranikhet', 80, '2 hours'),
  r('Haldwani', 'Jim Corbett', 55, '1.5 hours'),
  r('Haldwani', 'Ramnagar', 50, '1 hour'),
  r('Haldwani', 'Rudrapur', 35, '45 mins'),
  r('Haldwani', 'Kashipur', 45, '1 hour'),
  r('Haldwani', 'Pantnagar', 25, '30 mins'),
  r('Haldwani', 'Moradabad', 100, '2.5 hours'),
  r('Haldwani', 'Lucknow', 320, '6.5 hours'),
  r('Haldwani', 'Noida', 270, '6 hours'),

  // === RUDRAPUR ROUTES ===
  r('Rudrapur', 'Bareilly', 60, '1.5 hours'),
  r('Rudrapur', 'Delhi', 280, '6 hours'),
  r('Rudrapur', 'Nainital', 70, '2 hours'),
  r('Rudrapur', 'Haldwani', 35, '45 mins'),
  r('Rudrapur', 'Pantnagar', 15, '20 mins'),
  r('Rudrapur', 'Kashipur', 20, '30 mins'),
  r('Rudrapur', 'Jim Corbett', 60, '1.5 hours'),
  r('Rudrapur', 'Ramnagar', 55, '1.5 hours'),
  r('Rudrapur', 'Moradabad', 70, '1.5 hours'),
  r('Rudrapur', 'Noida', 270, '5.5 hours'),
  r('Rudrapur', 'Lucknow', 290, '6 hours'),
  r('Rudrapur', 'Sitarganj', 30, '45 mins'),
  r('Rudrapur', 'Khatima', 55, '1 hour'),

  // === MORADABAD ROUTES ===
  r('Moradabad', 'Bareilly', 50, '1 hour'),
  r('Moradabad', 'Delhi', 200, '4 hours'),
  r('Moradabad', 'Lucknow', 300, '6 hours'),
  r('Moradabad', 'Nainital', 120, '3 hours'),
  r('Moradabad', 'Haridwar', 170, '4 hours'),
  r('Moradabad', 'Noida', 180, '4 hours'),
  r('Moradabad', 'Gurgaon', 210, '4.5 hours'),
  r('Moradabad', 'Meerut', 120, '2.5 hours'),
  r('Moradabad', 'Haldwani', 100, '2.5 hours'),
  r('Moradabad', 'Rudrapur', 70, '1.5 hours'),
  r('Moradabad', 'Rampur', 30, '40 mins'),
  r('Moradabad', 'Bijnor', 70, '1.5 hours'),
  r('Moradabad', 'Amroha', 30, '40 mins'),

  // === RAMPUR ROUTES ===
  r('Rampur', 'Bareilly', 35, '45 mins'),
  r('Rampur', 'Delhi', 220, '4.5 hours'),
  r('Rampur', 'Moradabad', 30, '40 mins'),
  r('Rampur', 'Nainital', 130, '3.5 hours'),
  r('Rampur', 'Lucknow', 240, '5 hours'),
  r('Rampur', 'Noida', 200, '4 hours'),
  r('Rampur', 'Haldwani', 90, '2 hours'),

  // === KANPUR ROUTES ===
  r('Kanpur', 'Bareilly', 220, '4.5 hours'),
  r('Kanpur', 'Delhi', 450, '7 hours'),
  r('Kanpur', 'Lucknow', 80, '1.5 hours'),
  r('Kanpur', 'Agra', 280, '5 hours'),
  r('Kanpur', 'Varanasi', 330, '6 hours'),
  r('Kanpur', 'Prayagraj', 200, '4 hours'),
  r('Kanpur', 'Noida', 430, '7 hours'),
  r('Kanpur', 'Jaipur', 500, '9 hours'),
  r('Kanpur', 'Ayodhya', 220, '4 hours'),

  // === VARANASI ROUTES ===
  r('Varanasi', 'Bareilly', 450, '8 hours'),
  r('Varanasi', 'Delhi', 800, '12 hours'),
  r('Varanasi', 'Lucknow', 300, '5 hours'),
  r('Varanasi', 'Prayagraj', 130, '2.5 hours'),
  r('Varanasi', 'Ayodhya', 200, '4 hours'),
  r('Varanasi', 'Kanpur', 330, '6 hours'),
  r('Varanasi', 'Agra', 600, '10 hours'),
  r('Varanasi', 'Gorakhpur', 230, '4.5 hours'),
  r('Varanasi', 'Patna', 290, '5 hours'),

  // === PRAYAGRAJ ROUTES ===
  r('Prayagraj', 'Bareilly', 350, '6.5 hours'),
  r('Prayagraj', 'Delhi', 650, '10 hours'),
  r('Prayagraj', 'Lucknow', 200, '4 hours'),
  r('Prayagraj', 'Varanasi', 130, '2.5 hours'),
  r('Prayagraj', 'Kanpur', 200, '4 hours'),
  r('Prayagraj', 'Ayodhya', 170, '3.5 hours'),

  // === AYODHYA ROUTES ===
  r('Ayodhya', 'Bareilly', 280, '5.5 hours'),
  r('Ayodhya', 'Delhi', 600, '10 hours'),
  r('Ayodhya', 'Lucknow', 140, '3 hours'),
  r('Ayodhya', 'Varanasi', 200, '4 hours'),
  r('Ayodhya', 'Prayagraj', 170, '3.5 hours'),
  r('Ayodhya', 'Gorakhpur', 140, '3 hours'),

  // === GORAKHPUR ROUTES ===
  r('Gorakhpur', 'Bareilly', 350, '7 hours'),
  r('Gorakhpur', 'Delhi', 750, '12 hours'),
  r('Gorakhpur', 'Lucknow', 280, '5 hours'),
  r('Gorakhpur', 'Varanasi', 230, '4.5 hours'),
  r('Gorakhpur', 'Ayodhya', 140, '3 hours'),
  r('Gorakhpur', 'Patna', 280, '5 hours'),

  // === MATHURA ROUTES ===
  r('Mathura', 'Bareilly', 230, '4.5 hours'),
  r('Mathura', 'Delhi', 180, '3.5 hours'),
  r('Mathura', 'Agra', 60, '1 hour'),
  r('Mathura', 'Vrindavan', 15, '20 mins'),
  r('Mathura', 'Jaipur', 200, '4 hours'),
  r('Mathura', 'Lucknow', 400, '7 hours'),
  r('Mathura', 'Noida', 150, '3 hours'),
  r('Mathura', 'Gurgaon', 170, '3.5 hours'),

  // === VRINDAVAN ROUTES ===
  r('Vrindavan', 'Bareilly', 240, '5 hours'),
  r('Vrindavan', 'Delhi', 190, '3.5 hours'),
  r('Vrindavan', 'Mathura', 15, '20 mins'),
  r('Vrindavan', 'Agra', 70, '1.5 hours'),
  r('Vrindavan', 'Jaipur', 210, '4.5 hours'),
  r('Vrindavan', 'Noida', 160, '3.5 hours'),

  // === CHANDIGARH ROUTES ===
  r('Chandigarh', 'Bareilly', 350, '7 hours'),
  r('Chandigarh', 'Delhi', 250, '5 hours'),
  r('Chandigarh', 'Dehradun', 170, '4 hours'),
  r('Chandigarh', 'Haridwar', 200, '4.5 hours'),
  r('Chandigarh', 'Shimla', 120, '3 hours'),
  r('Chandigarh', 'Manali', 310, '7 hours'),
  r('Chandigarh', 'Dharamshala', 250, '5.5 hours'),
  r('Chandigarh', 'Amritsar', 230, '4.5 hours'),
  r('Chandigarh', 'Noida', 250, '5 hours'),
  r('Chandigarh', 'Jaipur', 500, '8 hours'),
  r('Chandigarh', 'Lucknow', 650, '11 hours'),

  // === SHIMLA ROUTES ===
  r('Shimla', 'Bareilly', 420, '9 hours'),
  r('Shimla', 'Delhi', 350, '7 hours'),
  r('Shimla', 'Chandigarh', 120, '3 hours'),
  r('Shimla', 'Dehradun', 220, '5 hours'),
  r('Shimla', 'Manali', 250, '6 hours'),

  // === MANALI ROUTES ===
  r('Manali', 'Bareilly', 550, '12 hours'),
  r('Manali', 'Delhi', 530, '12 hours'),
  r('Manali', 'Chandigarh', 310, '7 hours'),
  r('Manali', 'Shimla', 250, '6 hours'),

  // === ALMORA ROUTES ===
  r('Almora', 'Bareilly', 200, '5 hours'),
  r('Almora', 'Delhi', 350, '8 hours'),
  r('Almora', 'Nainital', 65, '2 hours'),
  r('Almora', 'Haldwani', 90, '2.5 hours'),
  r('Almora', 'Ranikhet', 50, '1.5 hours'),
  r('Almora', 'Kausani', 55, '1.5 hours'),
  r('Almora', 'Binsar', 30, '1 hour'),

  // === RANIKHET ROUTES ===
  r('Ranikhet', 'Bareilly', 180, '5 hours'),
  r('Ranikhet', 'Delhi', 380, '9 hours'),
  r('Ranikhet', 'Nainital', 55, '2 hours'),
  r('Ranikhet', 'Almora', 50, '1.5 hours'),
  r('Ranikhet', 'Haldwani', 80, '2 hours'),
  r('Ranikhet', 'Kausani', 85, '2.5 hours'),

  // === JIM CORBETT ROUTES ===
  r('Jim Corbett', 'Bareilly', 130, '3.5 hours'),
  r('Jim Corbett', 'Delhi', 260, '6 hours'),
  r('Jim Corbett', 'Nainital', 65, '2 hours'),
  r('Jim Corbett', 'Haridwar', 180, '4.5 hours'),
  r('Jim Corbett', 'Noida', 250, '5.5 hours'),
  r('Jim Corbett', 'Haldwani', 55, '1.5 hours'),
  r('Jim Corbett', 'Ramnagar', 15, '20 mins'),
  r('Jim Corbett', 'Lucknow', 380, '8 hours'),

  // === RAMNAGAR ROUTES ===
  r('Ramnagar', 'Bareilly', 120, '3 hours'),
  r('Ramnagar', 'Delhi', 250, '6 hours'),
  r('Ramnagar', 'Nainital', 60, '1.5 hours'),
  r('Ramnagar', 'Jim Corbett', 15, '20 mins'),
  r('Ramnagar', 'Haldwani', 50, '1 hour'),

  // === MEERUT ROUTES ===
  r('Meerut', 'Bareilly', 170, '3.5 hours'),
  r('Meerut', 'Delhi', 70, '1.5 hours'),
  r('Meerut', 'Noida', 60, '1.5 hours'),
  r('Meerut', 'Haridwar', 150, '3.5 hours'),
  r('Meerut', 'Dehradun', 180, '4 hours'),
  r('Meerut', 'Moradabad', 120, '2.5 hours'),
  r('Meerut', 'Gurgaon', 90, '2 hours'),
  r('Meerut', 'Muzaffarnagar', 60, '1.5 hours'),
  r('Meerut', 'Saharanpur', 110, '2.5 hours'),

  // === GHAZIABAD ROUTES ===
  r('Ghaziabad', 'Bareilly', 200, '4 hours'),
  r('Ghaziabad', 'Delhi', 30, '45 mins'),
  r('Ghaziabad', 'Noida', 15, '30 mins'),
  r('Ghaziabad', 'Meerut', 50, '1 hour'),
  r('Ghaziabad', 'Haridwar', 200, '4.5 hours'),
  r('Ghaziabad', 'Lucknow', 470, '8 hours'),

  // === FARIDABAD ROUTES ===
  r('Faridabad', 'Bareilly', 280, '5.5 hours'),
  r('Faridabad', 'Delhi', 35, '1 hour'),
  r('Faridabad', 'Noida', 30, '45 mins'),
  r('Faridabad', 'Agra', 180, '3.5 hours'),
  r('Faridabad', 'Mathura', 150, '3 hours'),
  r('Faridabad', 'Gurgaon', 40, '1 hour'),

  // === ALIGARH ROUTES ===
  r('Aligarh', 'Bareilly', 180, '3.5 hours'),
  r('Aligarh', 'Delhi', 140, '3 hours'),
  r('Aligarh', 'Agra', 90, '2 hours'),
  r('Aligarh', 'Noida', 120, '2.5 hours'),
  r('Aligarh', 'Lucknow', 350, '6 hours'),
  r('Aligarh', 'Mathura', 60, '1.5 hours'),

  // === SAHARANPUR ROUTES ===
  r('Saharanpur', 'Bareilly', 200, '4 hours'),
  r('Saharanpur', 'Delhi', 180, '4 hours'),
  r('Saharanpur', 'Haridwar', 80, '2 hours'),
  r('Saharanpur', 'Dehradun', 100, '2.5 hours'),
  r('Saharanpur', 'Roorkee', 50, '1 hour'),
  r('Saharanpur', 'Meerut', 110, '2.5 hours'),
  r('Saharanpur', 'Muzaffarnagar', 50, '1 hour'),
  r('Saharanpur', 'Chandigarh', 180, '4 hours'),

  // === MUZAFFARNAGAR ROUTES ===
  r('Muzaffarnagar', 'Bareilly', 180, '3.5 hours'),
  r('Muzaffarnagar', 'Delhi', 130, '3 hours'),
  r('Muzaffarnagar', 'Haridwar', 120, '3 hours'),
  r('Muzaffarnagar', 'Meerut', 60, '1.5 hours'),
  r('Muzaffarnagar', 'Saharanpur', 50, '1 hour'),
  r('Muzaffarnagar', 'Roorkee', 70, '1.5 hours'),

  // === BIJNOR ROUTES ===
  r('Bijnor', 'Bareilly', 120, '2.5 hours'),
  r('Bijnor', 'Delhi', 180, '4 hours'),
  r('Bijnor', 'Moradabad', 70, '1.5 hours'),
  r('Bijnor', 'Haridwar', 100, '2.5 hours'),
  r('Bijnor', 'Najibabad', 30, '45 mins'),

  // === ROORKEE ROUTES ===
  r('Roorkee', 'Bareilly', 180, '4 hours'),
  r('Roorkee', 'Delhi', 200, '4.5 hours'),
  r('Roorkee', 'Haridwar', 30, '45 mins'),
  r('Roorkee', 'Dehradun', 70, '2 hours'),
  r('Roorkee', 'Saharanpur', 50, '1 hour'),
  r('Roorkee', 'Muzaffarnagar', 70, '1.5 hours'),

  // === SHAHJAHANPUR ROUTES ===
  r('Shahjahanpur', 'Bareilly', 80, '1.5 hours'),
  r('Shahjahanpur', 'Lucknow', 180, '3.5 hours'),
  r('Shahjahanpur', 'Delhi', 300, '6 hours'),
  r('Shahjahanpur', 'Sitapur', 100, '2 hours'),

  // === PILIBHIT ROUTES ===
  r('Pilibhit', 'Bareilly', 55, '1 hour'),
  r('Pilibhit', 'Delhi', 290, '6 hours'),
  r('Pilibhit', 'Lucknow', 280, '5.5 hours'),
  r('Pilibhit', 'Nainital', 180, '4.5 hours'),

  // === SITAPUR ROUTES ===
  r('Sitapur', 'Bareilly', 180, '3.5 hours'),
  r('Sitapur', 'Lucknow', 90, '2 hours'),
  r('Sitapur', 'Delhi', 420, '7 hours'),
  r('Sitapur', 'Shahjahanpur', 100, '2 hours'),

  // === AMROHA ROUTES ===
  r('Amroha', 'Bareilly', 80, '1.5 hours'),
  r('Amroha', 'Delhi', 150, '3 hours'),
  r('Amroha', 'Moradabad', 30, '40 mins'),
  r('Amroha', 'Meerut', 100, '2 hours'),

  // === KASHIPUR ROUTES ===
  r('Kashipur', 'Bareilly', 80, '2 hours'),
  r('Kashipur', 'Delhi', 270, '5.5 hours'),
  r('Kashipur', 'Nainital', 80, '2 hours'),
  r('Kashipur', 'Rudrapur', 20, '30 mins'),
  r('Kashipur', 'Haldwani', 45, '1 hour'),
  r('Kashipur', 'Moradabad', 60, '1.5 hours'),

  // === PANTNAGAR ROUTES ===
  r('Pantnagar', 'Bareilly', 90, '2 hours'),
  r('Pantnagar', 'Delhi', 290, '6 hours'),
  r('Pantnagar', 'Nainital', 60, '1.5 hours'),
  r('Pantnagar', 'Haldwani', 25, '30 mins'),
  r('Pantnagar', 'Rudrapur', 15, '20 mins'),
  r('Pantnagar', 'Lucknow', 290, '6 hours'),

  // === KHATIMA ROUTES ===
  r('Khatima', 'Bareilly', 150, '3.5 hours'),
  r('Khatima', 'Delhi', 330, '7 hours'),
  r('Khatima', 'Rudrapur', 55, '1 hour'),
  r('Khatima', 'Sitarganj', 25, '30 mins'),
  r('Khatima', 'Banbasa', 30, '45 mins'),

  // === SITARGANJ ROUTES ===
  r('Sitarganj', 'Bareilly', 130, '3 hours'),
  r('Sitarganj', 'Delhi', 310, '6.5 hours'),
  r('Sitarganj', 'Rudrapur', 30, '45 mins'),
  r('Sitarganj', 'Khatima', 25, '30 mins'),

  // === BANBASA ROUTES ===
  r('Banbasa', 'Bareilly', 180, '4 hours'),
  r('Banbasa', 'Delhi', 360, '7.5 hours'),
  r('Banbasa', 'Khatima', 30, '45 mins'),

  // === BHIMTAL ROUTES ===
  r('Bhimtal', 'Bareilly', 160, '4.5 hours'),
  r('Bhimtal', 'Delhi', 310, '7 hours'),
  r('Bhimtal', 'Nainital', 25, '45 mins'),
  r('Bhimtal', 'Haldwani', 30, '45 mins'),

  // === PATNA ROUTES ===
  r('Patna', 'Bareilly', 650, '12 hours'),
  r('Patna', 'Delhi', 1000, '16 hours'),
  r('Patna', 'Lucknow', 550, '9 hours'),
  r('Patna', 'Varanasi', 290, '5 hours'),
  r('Patna', 'Gorakhpur', 280, '5 hours'),

  // === MUSSOORIE ROUTES ===
  r('Mussoorie', 'Bareilly', 270, '6.5 hours'),
  r('Mussoorie', 'Delhi', 280, '7 hours'),
  r('Mussoorie', 'Dehradun', 35, '1 hour'),
  r('Mussoorie', 'Haridwar', 85, '2.5 hours'),
  r('Mussoorie', 'Rishikesh', 75, '2 hours'),
  r('Mussoorie', 'Noida', 270, '6.5 hours'),
  r('Mussoorie', 'Chandigarh', 200, '5 hours'),

  // === CHAR DHAM ROUTES ===
  r('Kedarnath', 'Delhi', 450, '12 hours'),
  r('Kedarnath', 'Haridwar', 230, '7 hours'),
  r('Kedarnath', 'Rishikesh', 210, '6 hours'),
  r('Badrinath', 'Delhi', 520, '14 hours'),
  r('Badrinath', 'Haridwar', 320, '9 hours'),
  r('Badrinath', 'Rishikesh', 300, '8 hours'),
  r('Gangotri', 'Delhi', 480, '12 hours'),
  r('Gangotri', 'Haridwar', 290, '8 hours'),
  r('Gangotri', 'Rishikesh', 270, '7 hours'),
  r('Yamunotri', 'Delhi', 420, '11 hours'),
  r('Yamunotri', 'Haridwar', 220, '6 hours'),
  r('Yamunotri', 'Rishikesh', 200, '5.5 hours'),

  // === AULI ROUTES ===
  r('Auli', 'Delhi', 500, '13 hours'),
  r('Auli', 'Haridwar', 280, '8 hours'),
  r('Auli', 'Rishikesh', 260, '7 hours'),
  r('Auli', 'Bareilly', 380, '10 hours'),

  // === CHOPTA ROUTES ===
  r('Chopta', 'Delhi', 420, '10 hours'),
  r('Chopta', 'Haridwar', 200, '6 hours'),
  r('Chopta', 'Rishikesh', 180, '5 hours'),
  r('Chopta', 'Bareilly', 320, '8 hours'),
]

// Generate URL slug from city name
export function cityToSlug(city: string): string {
  return city.toLowerCase().replace(/\s+/g, '-')
}

// Get route key for lookup
export function getRouteKey(from: string, to: string): string {
  return `${cityToSlug(from)}-${cityToSlug(to)}`
}

// Find route data
export function findRoute(fromSlug: string, toSlug: string): RouteInfo | null {
  return allRoutes.find(r =>
    cityToSlug(r.from) === fromSlug && cityToSlug(r.to) === toSlug
  ) || null
}

// Get all route slugs for static generation
export function getAllRouteSlugs(): { from: string; to: string }[] {
  return allRoutes.map(r => ({
    from: cityToSlug(r.from),
    to: cityToSlug(r.to)
  }))
}

// Popular routes for homepage (subset)
export function getPopularRoutes(): RouteInfo[] {
  const popularCities = ['Delhi', 'Lucknow', 'Nainital', 'Noida', 'Haridwar', 'Dehradun', 'Agra', 'Rishikesh']
  return allRoutes.filter(r =>
    r.from === 'Bareilly' && popularCities.includes(r.to)
  )
}
