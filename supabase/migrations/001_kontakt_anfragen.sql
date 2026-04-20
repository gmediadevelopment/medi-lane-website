-- ============================================
-- WEBSITE KONTAKT-ANFRAGEN
-- Tabelle für das Arbeitgeber-Kontaktformular
-- auf medi-lane.de/arbeitgeber
-- ============================================

CREATE TABLE IF NOT EXISTS website_kontakt_anfragen (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  telefon TEXT,
  einrichtung TEXT NOT NULL,
  nachricht TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  bearbeitet BOOLEAN DEFAULT FALSE,
  notizen TEXT
);

-- RLS: Allow anonymous inserts (website visitors), restrict reads to authenticated
ALTER TABLE website_kontakt_anfragen ENABLE ROW LEVEL SECURITY;

-- Anyone can submit contact form (uses anon key)
CREATE POLICY "Anyone can insert contact requests"
  ON website_kontakt_anfragen
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admin) can read
CREATE POLICY "Authenticated users can read contact requests"
  ON website_kontakt_anfragen
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update (mark as processed)
CREATE POLICY "Authenticated users can update contact requests"
  ON website_kontakt_anfragen
  FOR UPDATE
  TO authenticated
  USING (true);

-- Index for sorting by date
CREATE INDEX idx_kontakt_anfragen_created_at ON website_kontakt_anfragen(created_at DESC);
