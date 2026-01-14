# Admin UI & Tools Scan

## Snapshot of what exists today

### Web admin UI
- The admin dashboard lives at `/admin` and provides a single-page workspace for managing product kits, including:
  - Create Product Kit form (product name, category, method).
  - Product list with counts and selection.
  - File viewer/editor for markdown and CSV content.
- The dashboard UX is a simple, clean layout with a header, sidebar, and main content pane.

### API surface
- Product kit data is stored in a Postgres database via `@vercel/postgres` tables (`products`, `files`).
- The admin UI consumes API endpoints for:
  - Listing products.
  - Creating products and generating template files.
  - Reading and updating individual file content.

### Auth
- NextAuth is set up with a credentials provider for a single admin user.
- The `/admin` route is protected by the `authorized` callback and redirects unauthenticated users to `/login`.

## Gaps & needs (admin tools + UI)

### Admin tools backlog
1. **User management + roles**
   - No user management UI or role-based access control.
   - The admin experience assumes a single static credential.

2. **Product lifecycle management**
   - No ability to delete/archive products.
   - No status tracking (draft, validated, sourcing, live, etc.).

3. **Activity & auditing**
   - No activity log for edits, file changes, or product creation.
   - No changelog or versioning for file edits.

4. **Template & config management**
   - Templates are static; no admin UI for updating templates.
   - Fee/margin config is not editable from the UI.

5. **Import/export**
   - No CSV export of products or bulk upload.
   - No ability to download an entire product kit as a zip.

6. **Automation integrations**
   - No integration for external tools (Helium10, Keepa, SellerAmp).
   - No workflow hooks for notifications or reminders.

### UI/UX improvements
1. **Navigation & layout**
   - No global navigation between admin sections; only the product kit workspace is available.

2. **Search & filtering**
   - No search bar or filters (category, method, created date, status).

3. **File experience**
   - Markdown is shown in a `pre` block; no rendered preview.
   - No diff view or edit history.

4. **Onboarding & empty states**
   - No guided onboarding flow for first-time setup.
   - No prompts to connect tools, set defaults, or adjust margins.

5. **Metrics & dashboards**
   - No analytics: product pipeline counts, profitability targets, or validation checklist progress.

### Data & infra concerns
1. **DB schema**
   - Current schema is minimal and may need expansion for:
     - user accounts
     - roles
     - activity logs
     - product statuses
     - template versions

2. **Local/hosted storage**
   - Files are stored in the DB; no storage strategy for uploads (images, supplier quotes, invoices).

3. **Audit & backup**
   - No DB backups or snapshot workflows defined.

### Security needs
1. **Credentials**
   - Admin credentials are currently static and intended for env variables only.
   - Password reset flow is missing.

2. **Access control**
   - No role separation for read-only vs. edit access.

## Recommended next steps (phased)

### Phase 1: Admin foundations
- Add a left-hand nav with sections: Dashboard, Products, Templates, Settings.
- Add search/filter controls to the product list.
- Add delete/archive product actions.
- Add markdown preview and simple history (last updated, last editor).

### Phase 2: Admin tooling
- Add a templates editor for admins (with validation).
- Add settings UI to edit margin/fee defaults.
- Add audit log (at least for edits/creates/deletes).

### Phase 3: Automation + scale
- Integrate external tool data import.
- Add product KPI dashboards and validation progress.
- Add bulk import/export and kit download.

## Open questions to confirm before building
- Should multiple family members have separate logins?
- Which roles matter (owner/admin, editor, viewer)?
- Which external tools should be prioritized for integration?
- Should we keep file content in the DB or introduce a file storage layer?
- Any specific metrics/KPIs needed on day 1?
